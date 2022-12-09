import { render, screen, waitFor } from "../../test-utils";
import userEvent from '@testing-library/user-event'
import Noticias from "./Noticias";

describe.only("Prueba componente Noticias", () => {
    test("Cuando presiono el último botón Ver más, aparace noticia premium", async () => {
        render(<Noticias />)
        const user = userEvent.setup()

        // esperamos 3 segundos ya que fakeRest demora al menos 1 segundo en simular el retorno de datos
        const btns = await waitFor(() => screen.findAllByText("Ver más"), { timeout: 3000 })

        await user.click(btns[2])

        const h3 = await screen.findByText("Suscríbete a nuestro Newsletter")

        expect(h3).toBeInstanceOf(HTMLHeadingElement);
    });

    test("Cuando presiono el 1er botón Ver más, aparace noticia correspondiente", async () => {
        render(<Noticias />)
        const user = userEvent.setup()

        // esperamos 3 segundos ya que fakeRest demora al menos 1 segundo en simular el retorno de datos
        const btns = await waitFor(() => screen.findAllByText("Ver más"), { timeout: 3000 })

        await user.click(btns[0])

        const p = await screen.findByText((p) => {
            return p.includes("1,000 galones de combustible para ganar un juguete promocional para su hija Maggie.")
        })

        expect(p).toBeInstanceOf(HTMLParagraphElement);
    });



})