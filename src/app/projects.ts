export type Project = {
    title: string,
    description: string,
    repoLink: string,
    previewLink: string,
    img: string
}

export const projects: Project[] = [
        {
            title: "Etch a Sketch",
            description: "A fun little drawing app",
            repoLink: "https://github.com/Benjamin-Re/etch-a-sketch",
            previewLink: "https://benjamin-re.github.io/etch-a-sketch/",
            img: "/etchasketch.png"
        },
        {
            title: "Rock Paper Scissors",
            description: "Play the popular game against the computer",
            repoLink: "https://github.com/Benjamin-Re/rock-paper-scissors",
            previewLink: "https://benjamin-re.github.io/rock-paper-scissors/",
            img: "/rock-paper-scissors.png"
        },
        {
            title: "Where is Waldo?",
            description: "Find the characters in the image as fast as possible",
            repoLink: "https://github.com/Benjamin-Re/waldo-fe",
            previewLink: "https://waldo-fe-eight.vercel.app/",
            img: "/waldo1.png"
        }

    ]