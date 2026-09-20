import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import App from "./App";

afterEach(()=>{
    cleanup();
})

vi.mock("framer-motion", () => {
  const removeMotionProps = (props) =>{
    const cleanProps = {...props };
    delete cleanProps.initial;
    delete cleanProps.animate;
    delete cleanProps.transition;
    delete cleanProps.whileInView;
    delete cleanProps.viewport;
    return cleanProps;
  };

  return {
    motion: {
      div: ({ children, ...props }) => (
        <div {...removeMotionProps(props)}>{children}</div>
      ),
      h1: ({ children, ...props }) => (
        <h1 {...removeMotionProps(props)}>{children}</h1>
      ),
      h2: ({ children, ...props }) => (
        <h2 {...removeMotionProps(props)}>{children}</h2>
      ),
      article: ({ children, ...props }) => (
        <article {...removeMotionProps(props)}>{children}</article>
      ),
    },
  };
});

describe("Testes do App", () => {
  it("deve mostrar o nome Gabriel Munhoz", () => {
    render(<App />);

    expect(screen.getAllByText(/Gabriel Munhoz/i).length).toBeGreaterThan(0);
  });

  it("deve mostrar os links de navegação", () => {
    render(<App />);

    expect(screen.getByRole("link", { name: "Sobre" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Projetos" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Contato" })).toBeInTheDocument();
  });

  it("deve mostrar algumas tecnologias", () => {
    render(<App />);

    expect(screen.getAllByText("React").length).toBeGreaterThan(0);
    expect(screen.getAllByText("GitHub Actions").length).toBeGreaterThan(0);
  });

  it("deve mostrar os projetos", () => {
    render(<App />);

    expect(screen.getByText("DevOps Pipeline")).toBeInTheDocument();
    expect(screen.getByText("React Dashboard")).toBeInTheDocument();
    expect(screen.getByText("Automation Project")).toBeInTheDocument();
  });

  it("deve ter um link para o GitHub", () => {
    render(<App />);

    const linkGitHub = screen.getByRole("link", { name: /GitHub/i });

    expect(linkGitHub).toHaveAttribute(
      "href",
      "https://github.com/gaabrielmunhoz"
    );
  });
});