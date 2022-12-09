import { render, screen, waitFor } from "../../test-utils";
import userEvent from '@testing-library/user-event'
import Cita from "./Cita";


describe("Prueba componente Cita", () => {
  test("Cuando presiono boton buscar, devuelve una cita aleatoria", async () => {
    render(<Cita />)
    const user = userEvent.setup()

    const btn = screen.getByLabelText('Obtener cita aleatoria')
    await user.click(btn)

    const p = await screen.findByText("personaje aleatorio")

    expect(p).toBeInstanceOf(HTMLParagraphElement);
  });
  test("Cuando ingreso nombre de personaje, devuelve cita de ese personaje", async () => {
    render(<Cita />)
    const user = userEvent.setup()

    const inputField = screen.getByLabelText('Author Cita');
    user.type(inputField, "Bart");

    await waitFor(() => expect(inputField).toHaveValue("Bart"))
    const btn = screen.getByLabelText('Obtener Cita')
    await user.click(btn)

    const p = await screen.findByText("Bart")

    expect(p).toBeInstanceOf(HTMLParagraphElement);
  });
  test("Cuando presiono boton borrar, se elimina nombre de personaje del input", async () => {
    render(<Cita />)
    const user = userEvent.setup()
    const inputField = screen.getByLabelText('Author Cita');
    user.type(inputField, "Bart");
    await waitFor(() => expect(inputField).toHaveValue("Bart"))

    const btn = screen.getByLabelText('Borrar')
    await user.click(btn)

    await waitFor(() => expect(inputField).toHaveValue(""))

    
  });
});

