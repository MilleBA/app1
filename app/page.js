import Card from "@/components/Card";
import data from "@/data.js";
import Wrapper from "@/components/Wrapper";

export default function HomePage() {
    return (
        <Wrapper>
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
        </Wrapper>
    )
}
