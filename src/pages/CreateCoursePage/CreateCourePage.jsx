import { Header } from "../../widgets/Header/Header";
import { Footer } from "../../widgets/Footer/Footer";
import { MarkdownEditor } from "../../widgets/MarkdownEditor/MarkdownEditor";

export const CreateCoursePage = () => {
  return (
    <>
      <Header />

      <main>
        <MarkdownEditor />
      </main>

      <Footer />
    </>
  );
};