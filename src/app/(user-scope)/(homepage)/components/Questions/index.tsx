import { FAQ_QUESTIONS } from './data'
import { QuestionItem } from './QuestionItem'

export const Questions: React.FC = async () => {
  return (
    <section className="bg-white px-4 py-12 lg:py-24">
      <div className="mx-auto flex w-full max-w-2xl flex-col gap-8 lg:max-w-7xl">
        {FAQ_QUESTIONS.map((question, index: number) => (
          <QuestionItem copy={question} key={`${question.title}-${index}`} />
        ))}
      </div>
    </section>
  )
}
