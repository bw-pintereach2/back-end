exports.seed = async function(knex) {
  await knex("articles").insert([
    {
      article_title: "American Society for Microbiology",
      article_link: "https://www.asm.org/",
      article_notes: "The American Society for Microbiology (ASM) is the oldest and largest single life science membership organization in the world",
      category_id: 1,
      user_id: 1
    },
    {
      article_title: "Guide to Parasitology",
      article_link: "https://www.environmentalscience.org/parasitology",
      article_notes: "Parasitology is the study of species that depend on others for survival that cause harm to the species on which it depends.",
      category_id: 1,
      user_id: 3
    },
    {
      article_title: "The Royal Society of Chemistry",
      article_link: "https://www.rsc.org/",
      article_notes: "Advancing excellence, connecting chemical scientists and shaping the future of the chemical sciences for the benefit of humanity.",
      category_id: 2,
      user_id: 2
    },
    {
      article_title: "Q&A: How synthetic biology will change us",
      article_link: "https://phys.org/news/2020-05-qa-synthetic-biology.html",
      article_notes: "The name 'synthetic biology' has come to mean a new set of technologies around reading, writing and editing of DNA, and designing, building and testing of biological cells to perform particular functions.",
      category_id: 3,
      user_id: 1
    },
    {
      article_title: "Emerging from stealth, Octant is bringing the tools of synthetic biology to large scale drug discovery",
      article_link: "https://techcrunch.com/2020/05/20/emerging-from-stealth-octant-is-bringing-the-tools-of-synthetic-biology-to-large-scale-drug-discovery/",
      article_notes: "As the pharmaceuticals industry turns its attention to precision medicine — the search for ever more tailored treatments for specific diseases using genetic engineering — Octant is using the same technologies to engage in drug discovery and diagnostics on a mass scale.",
      category_id: 3,
      user_id: 3
    },
    {
      article_title: "Virus-Infected Bees Practice Social Distancing",
      article_link: "https://www.scientificamerican.com/podcast/episode/virus-infected-bees-practice-social-distancing/",
      article_notes: "Bees infected with a virus cut back on interactions within their hive but find it easier to get past sentries at neighboring hives.",
      category_id: 2,
      user_id: 3
    },
  ])
}