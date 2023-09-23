import Card from "@/components/Card";
import data from "@/data.js";

export default function HomePage() {
    return (
        <>
            {
                data.map(card => (
                    <Card
                        key={card.id}
                        title={card.title}
                        description={card.description}
                        buttonText={card.buttonText}
                        imageUrl={card.imageUrl}
                    />
                ))}
        </>
    )
}
