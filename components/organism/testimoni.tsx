import { CardTestiominal } from "../molecules"

export const TestimoniPage = () => {
    return (
        <section className="bg-gray-100 py-10">
            <h3 className="text-head">Testimonials</h3>
            <p className="text-center w-1/2 mx-auto">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores excepturi eaque cumque at, sequi molestiae iure! Debitis totam alias atque delectus expedita nam, iure asperiores, maiores odit corporis eligendi optio.</p>
            <CardTestiominal 
                name="Tedy Sukma"
                comment="lorem ipsum dolor sit amet"
                src="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.jpg"
            />
        </section>
    )
}