import { Fragment } from "react";

const URL_REGEX = /(https?:\/\/[^\s)]+)/g;

const stripProtocol = (url: string) =>
  url.replace(/^https?:\/\//, "").replace(/^www\./, "");

export interface FaqAnswerProps {
  text: string;
  paragraphClassName?: string;
  linkClassName?: string;
}

const FaqAnswer = ({
  text,
  paragraphClassName,
  linkClassName = "text-[#14b8a6] hover:underline",
}: FaqAnswerProps) => {
  if (!text) {
    return null;
  }

  const paragraphs = text.split(/\n{2,}/).filter(Boolean);

  return (
    <>
      {paragraphs.map((paragraph, paragraphIndex) => {
        const segments = paragraph.split(URL_REGEX);
        return (
          <p
            key={`faq-answer-${paragraphIndex}`}
            className={paragraphClassName}
          >
            {segments.map((segment, segmentIndex) => {
              if (segmentIndex % 2 === 1) {
                const href = segment;
                return (
                  <a
                    key={`faq-answer-${paragraphIndex}-${segmentIndex}`}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClassName}
                  >
                    {stripProtocol(href)}
                  </a>
                );
              }

              return (
                <Fragment key={`faq-answer-text-${paragraphIndex}-${segmentIndex}`}>
                  {segment}
                </Fragment>
              );
            })}
          </p>
        );
      })}
    </>
  );
};

export default FaqAnswer;
