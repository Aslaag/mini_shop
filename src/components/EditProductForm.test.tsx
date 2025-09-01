import { fireEvent, render, screen } from "@testing-library/react";
import { vi } from "vitest";
import { EditProductForm } from "./EditProductForm";

describe("EditProductForm", () => {
  const product = {
    id: "p1",
    name: "Wireless Mouse",
    category: "Tech",
    price: 19.5,
    stock: 5,
  };

  test("affiche les valeurs initiales", () => {
    render(<EditProductForm product={product} onSave={vi.fn()} />);

    expect(screen.getByDisplayValue("19.5")).toBeInTheDocument();
    expect(screen.getByDisplayValue("5")).toBeInTheDocument();
  });

  test("empêche la soumission avec prix négatif", () => {
    const mockSave = vi.fn();
    render(<EditProductForm product={product} onSave={mockSave} />);

    fireEvent.change(screen.getByLabelText(/price/i), { target: { value: "-10" } });
    fireEvent.click(screen.getByText(/submit/i));

    expect(screen.getByText(/errorPrice/i)).toBeInTheDocument();
    expect(mockSave).not.toHaveBeenCalled();
  });

  test("met à jour le produit avec des valeurs correctes", () => {
    const mockSave = vi.fn();
    render(<EditProductForm product={product} onSave={mockSave} />);

    fireEvent.change(screen.getByLabelText(/price/i), { target: { value: "25" } });
    fireEvent.change(screen.getByLabelText(/stock/i), { target: { value: "10" } });
    fireEvent.click(screen.getByText(/submit/i));

    expect(mockSave).toHaveBeenCalledWith({
      ...product,
      price: 25,
      stock: 10,
    });
  });
});
