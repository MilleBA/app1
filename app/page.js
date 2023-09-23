import Card from "@/components/Card";
import Wrapper from "@/components/Wrapper";
import data from "@/data.js";

export default function HomePage() {
  return (
      <>
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
      </>
  )
}
