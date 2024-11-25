import Link from "next/link";

export default function Engrish() {
    return (
        <div>
            <div>
                <p>Engrish</p>
                <p>
                    Fix your Engrish through Engrish so that it turns to English
                </p>
            </div>
            <div>
                <p>Progress</p>
                <p>10%/100%</p>
            </div>
            <div>
                <p>Milestones</p>
                <div>
                    <p>Frontend</p>
                    <p>Designed all menus</p>
                </div>
                <div>
                    <p>Backend</p>
                    <p>Speech-to-Text linked and properly interpreting text</p>
                    <p>Grammar Checker linked and properly correcting text</p>
                    <p>
                        Large Language Model linked and properly responding to
                        voice prompts
                    </p>
                    <p>
                        Text-to-Speech linked and properly converting LLMs text
                        to speech
                    </p>
                </div>
            </div>
            <div>
                <p>Study Progress</p>
                <p>See the Application at: Engrish</p>
                <p>
                    See the Study at:{" "}
                    <Link href="https://drive.google.com/file/d/1S9Mgg7FDpotsUh6QMyN2EICSlSQCY8Wi/view?usp=drive_link">
                        Engrish: An AI-Assisted Language Learning Software in
                        Enhancing ICT Students&apos; English Conversational
                        Skills
                    </Link>
                </p>
            </div>
        </div>
    );
}
