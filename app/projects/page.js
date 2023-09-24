import Wrapper from "@/components/Wrapper";
import data from "@/data";
import Card from "@/components/Card";

export default function ProjectPage() {
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
                        ad={card.href}
                    />
                ))}
        </Wrapper>
    )
}