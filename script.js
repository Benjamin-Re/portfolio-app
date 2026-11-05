const projects = [
  {
    title: "Simon Says",
    description: "Repeat the sequence of colors and sounds for as long as you can",
    repoLink: "https://github.com/Benjamin-Re/simon-says-js",
    previewLink: "https://benjamin-re.github.io/simon-says-js/",
    img: "./public/simon.png",
  },
  {
    title: "Etch a Sketch",
    description: "A fun little drawing app",
    repoLink: "https://github.com/Benjamin-Re/etch-a-sketch",
    previewLink: "https://benjamin-re.github.io/etch-a-sketch/",
    img: "./public/etchasketch.png",
  },
  {
    title: "Rock Paper Scissors",
    description: "Play the popular game against the computer",
    repoLink: "https://github.com/Benjamin-Re/rock-paper-scissors",
    previewLink: "https://benjamin-re.github.io/rock-paper-scissors/",
    img: "./public/rock-paper-scissors.png",
  },
  {
    title: "Where is Waldo?",
    description: "Find the characters in the image as fast as possible",
    repoLink: "https://github.com/Benjamin-Re/waldo-fe",
    previewLink: "https://waldo-fe-eight.vercel.app/",
    img: "./public/waldo1.png",
  },
  {
    title: "Blog",
    description:
      "This project is like a small CMS or Wordpress clone. You can create and edit content that is then displayed in another frontend.",
    repoLink: "https://github.com/Benjamin-Re/blog-fe-reader",
    previewLink: "https://blog-fe-reader.vercel.app/",
    img: "./public/blog.png",
  },
  {
    title: "Memocards",
    description: "A Memory game, with dogs :)",
    repoLink: "https://github.com/Benjamin-Re/memory-cards",
    previewLink: "https://memocartas.vercel.app/",
    img: "./public/memocards.png",
  },
  {
    title: "Webshop",
    description: "A fake clothing Webshop with shopping card",
    repoLink: "https://github.com/Benjamin-Re/ReactShop",
    previewLink: "https://react-shop-drab-five.vercel.app/",
    img: "./public/webshop.png",
  },
];

function createIconLink(url, label, iconPath) {
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("aria-label", label);

  const icon = document.createElement("img");
  icon.src = iconPath;
  icon.alt = "";

  link.append(icon);
  return link;
}

function createProjectCard(project) {
  const card = document.createElement("article");
  card.className = "project-card";

  const image = document.createElement("img");
  image.src = project.img;
  image.alt = `Preview of ${project.title}`;
  card.append(image);

  const text = document.createElement("div");
  text.className = "card-text-container";

  const heading = document.createElement("div");
  heading.className = "card-heading";

  const title = document.createElement("h2");
  title.textContent = project.title;
  heading.append(title);

  const links = document.createElement("div");
  links.className = "icon-container";
  links.append(
    createIconLink(project.repoLink, "View source on GitHub", "./public/invertocat.svg"),
    createIconLink(project.previewLink, "Open live preview", "./public/open-link.svg"),
  );
  heading.append(links);

  const description = document.createElement("p");
  description.textContent = project.description;
  text.append(heading, description);
  card.append(text);

  return card;
}

const projectContainer = document.querySelector("#projects");
projects.forEach((project) => projectContainer.append(createProjectCard(project)));
