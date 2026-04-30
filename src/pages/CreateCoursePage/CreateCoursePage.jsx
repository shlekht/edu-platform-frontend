import { Header } from "../../widgets/Header/Header";
import { Footer } from "../../widgets/Footer/Footer";
import { MarkdownEditor } from "../../widgets/MarkdownEditor/MarkdownEditor";
import { Container } from '../../shared/ui/Container/Container';

export const CreateCoursePage = () => {
  return (
    <>
      <Header />

      <Container>
        <MarkdownEditor />
      </Container>

      <Footer />
    </>
  );
};