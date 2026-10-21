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
        },
        {
            title: "Blog",
            description: "This project is like a small CMS or Wordpress clone. You can create and edit content that is then displayed in another frontend.",
            repoLink: "https://github.com/Benjamin-Re/blog-fe-reader",
            previewLink: "https://blog-fe-reader.vercel.app/",
            img: "/blog.png"
        },
        {
            title: "Memocards",
            description: "A Memory game, with dogs :)",
            repoLink: "https://github.com/Benjamin-Re/memory-cards",
            previewLink: "https://memocartas.vercel.app/",
            img: "/memocards.png"
        },
        {
            title: "Webshop",
            description: "A fake clothing Webshop with shopping card",
            repoLink: "https://github.com/Benjamin-Re/ReactShop",
            previewLink: "https://react-shop-drab-five.vercel.app/",
            img: "/webshop.png"
        }

    ]