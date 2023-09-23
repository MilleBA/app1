import classes from './starting-page.module.css';
import Wrapper from "@/components/Wrapper";

function StartingPageContent() {

    return (
        <Wrapper>
            <section className={classes.starting}>
                <h1>Welcome on Board!</h1>
            </section>
        </Wrapper>
    );
}

export default StartingPageContent;
