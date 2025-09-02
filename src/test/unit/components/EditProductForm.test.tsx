import { fireEvent, render, screen } from "@testing-library/react";
import { vi } from "vitest";
import { EditProductForm } from "../../../components/EditProductForm";

describe("EditProductForm", () => {
  const productMock = {
    id: "p1",
    name: "Wireless Mouse",
    category: "Tech",
    price: 19.5,
    stock: 5,
  };

  it("should display initial values", () => {
    render(<EditProductForm product={productMock} onSave={vi.fn()} />);

    expect(screen.getByDisplayValue("19.5")).toBeInTheDocument();
    expect(screen.getByDisplayValue("5")).toBeInTheDocument();
  });

  it("should prevent the submission of a negative price", () => {
    const mockSave = vi.fn();
    render(<EditProductForm product={productMock} onSave={mockSave} />);

    fireEvent.change(screen.getByLabelText(/price/i), { target: { value: "-10" } });
    fireEvent.click(screen.getByText(/submit/i));

    expect(screen.getByText(/errorPrice/i)).toBeInTheDocument();
    expect(mockSave).not.toHaveBeenCalled();
  });

  it("should update a product the product with new correct values", () => {
    const mockSave = vi.fn();
    render(<EditProductForm product={productMock} onSave={mockSave} />);

    fireEvent.change(screen.getByLabelText(/price/i), { target: { value: "25" } });
    fireEvent.change(screen.getByLabelText(/stock/i), { target: { value: "10" } });
    fireEvent.click(screen.getByText(/submit/i));

    expect(mockSave).toHaveBeenCalledWith({
      ...productMock,
      price: 25,
      stock: 10,
    });
  });
});