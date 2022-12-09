import { render, screen } from "../../test-utils";
import Bio from "./Bio";
import userEvent from '@testing-library/user-event'

describe("Prueba componente Bio", () => {
    test("Cuando selecciono botón de un personaje, muestra info de ese personaje", async () => {
        render(<Bio />)
        const user = userEvent.setup()

        const btn = await screen.findByText('LISA')
        await user.click(btn)

        const h3 = await screen.findByText("Lisa Simpson")

        expect(h3).toBeInstanceOf(HTMLHeadingElement);
    });

    test("Cuando se monta componente, aparece por defecto Bart", async () => {
        render(<Bio />)

        const h3 = await screen.findByText("Bart Simpson")

        expect(h3).toBeInstanceOf(HTMLHeadingElement);
    });
})