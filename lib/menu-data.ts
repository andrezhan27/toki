// Menu photographs supplied in MENU TOKI. Categories follow the dining sequence.
export type MenuItem = { id: string; namePt: string; nameEn: string; src: string; isNew?: boolean };
export type MenuCategory = { id: string; pt: string; en: string; descriptionPt: string; descriptionEn: string; items: MenuItem[] };

export const menuCategories: MenuCategory[] = [
  {
    "id": "entradas-frias",
    "pt": "Entradas Frias",
    "en": "Cold starters",
    "descriptionPt": "Frescura e pequenos sabores para começar.",
    "descriptionEn": "Fresh flavours and small bites to begin.",
    "items": [
      {
        "id": "atum-mille-foglie",
        "namePt": "Atum Mille Foglie",
        "nameEn": "Tuna mille-feuille",
        "src": "/menu/dishes/entradas-frias/atum-mille-foglie.webp"
      },
      {
        "id": "ceviche-de-atum",
        "namePt": "Ceviche de Atum",
        "nameEn": "Tuna ceviche",
        "src": "/menu/dishes/entradas-frias/ceviche-de-atum.webp"
      },
      {
        "id": "ceviche-de-salmao",
        "namePt": "Ceviche de Salmão",
        "nameEn": "Salmon ceviche",
        "src": "/menu/dishes/entradas-frias/ceviche-de-salmao.webp"
      },
      {
        "id": "ceviche-misto",
        "namePt": "Ceviche misto",
        "nameEn": "Mixed ceviche",
        "src": "/menu/dishes/entradas-frias/ceviche-misto.webp"
      },
      {
        "id": "pringles-de-atum",
        "namePt": "Pringles de Atum",
        "nameEn": "Tuna Pringles",
        "src": "/menu/dishes/entradas-frias/pringles-de-atum.webp"
      },
      {
        "id": "pringles-de-robalo",
        "namePt": "Pringles de Robalo",
        "nameEn": "Sea bass Pringles",
        "src": "/menu/dishes/entradas-frias/pringles-de-robalo.webp"
      },
      {
        "id": "pringles-salmao",
        "namePt": "Pringles de salmão",
        "nameEn": "Salmon Pringles",
        "src": "/menu/dishes/entradas-frias/pringles-salmao.webp"
      },
      {
        "id": "rolo-salmao-picado",
        "namePt": "Rolo Salmão Picado",
        "nameEn": "Chopped salmon roll",
        "src": "/menu/dishes/entradas-frias/rolo-salmao-picado.webp"
      },
      {
        "id": "rolo-salmao-tempura",
        "namePt": "Rolo Salmão Tempura",
        "nameEn": "Salmon tempura roll",
        "src": "/menu/dishes/entradas-frias/rolo-salmao-tempura.webp"
      },
      {
        "id": "rolo-salmao",
        "namePt": "Rolo Salmão",
        "nameEn": "Salmon roll",
        "src": "/menu/dishes/entradas-frias/rolo-salmao.webp"
      },
      {
        "id": "salada-de-pepino",
        "namePt": "Salada de Pepino",
        "nameEn": "Cucumber salad",
        "src": "/menu/dishes/entradas-frias/salada-de-pepino.webp"
      },
      {
        "id": "taco-de-atum",
        "namePt": "Taco de Atum",
        "nameEn": "Tuna taco",
        "src": "/menu/dishes/entradas-frias/taco-de-atum.webp"
      },
      {
        "id": "taco-de-salmao",
        "namePt": "Taco de Salmão",
        "nameEn": "Salmon taco",
        "src": "/menu/dishes/entradas-frias/taco-de-salmao.webp"
      },
      {
        "id": "taco-de-tempura",
        "namePt": "Taco de Tempura",
        "nameEn": "Tempura taco",
        "src": "/menu/dishes/entradas-frias/taco-de-tempura.webp"
      },
      {
        "id": "wakame",
        "namePt": "Wakame",
        "nameEn": "Wakame",
        "src": "/menu/dishes/entradas-frias/wakame.webp"
      }
    ]
  },
  {
    "id": "entradas-quentes",
    "pt": "Entradas Quentes",
    "en": "Hot starters",
    "descriptionPt": "Gyozas, tempuras e outras entradas para partilhar.",
    "descriptionEn": "Gyoza, tempura and more starters to share.",
    "items": [
      {
        "id": "batata-frita",
        "namePt": "Batata Frita",
        "nameEn": "French fries",
        "src": "/menu/dishes/entradas-quentes/batata-frita.webp"
      },
      {
        "id": "brocolos-salteados",
        "namePt": "Brócolos Salteados",
        "nameEn": "Sautéed broccoli",
        "src": "/menu/dishes/entradas-quentes/brocolos-salteados.webp"
      },
      {
        "id": "camarao-panado",
        "namePt": "Camarão Panado",
        "nameEn": "Breaded prawns",
        "src": "/menu/dishes/entradas-quentes/camarao-panado.webp"
      },
      {
        "id": "cogumelos-salteados",
        "namePt": "Cogumelos Salteados",
        "nameEn": "Sautéed mushrooms",
        "src": "/menu/dishes/entradas-quentes/cogumelos-salteados.webp"
      },
      {
        "id": "crepes-de-camarao",
        "namePt": "Crepes de Camarão",
        "nameEn": "Prawn spring rolls",
        "src": "/menu/dishes/entradas-quentes/crepes-de-camarao.webp"
      },
      {
        "id": "crepes",
        "namePt": "Crepes",
        "nameEn": "Spring rolls",
        "src": "/menu/dishes/entradas-quentes/crepes.webp"
      },
      {
        "id": "dim-sum",
        "namePt": "Dim Sum",
        "nameEn": "Dim Sum",
        "src": "/menu/dishes/entradas-quentes/dim-sum.webp"
      },
      {
        "id": "edamame",
        "namePt": "Edamame",
        "nameEn": "Edamame",
        "src": "/menu/dishes/entradas-quentes/edamame.webp"
      },
      {
        "id": "gambas-a-guilho",
        "namePt": "Gambas à Guilho",
        "nameEn": "Garlic prawns",
        "src": "/menu/dishes/entradas-quentes/gambas-a-guilho.webp"
      },
      {
        "id": "gua-bao-frango",
        "namePt": "Gua Bao Frango",
        "nameEn": "Chicken gua bao",
        "src": "/menu/dishes/entradas-quentes/gua-bao-frango.webp"
      },
      {
        "id": "gua-bao-pato",
        "namePt": "Gua Bao Pato",
        "nameEn": "Duck gua bao",
        "src": "/menu/dishes/entradas-quentes/gua-bao-pato.webp"
      },
      {
        "id": "gua-bao-tempura",
        "namePt": "Gua Bao Tempura",
        "nameEn": "Tempura gua bao",
        "src": "/menu/dishes/entradas-quentes/gua-bao-tempura.webp"
      },
      {
        "id": "gyoza-a-vapor",
        "namePt": "Gyoza a Vapor",
        "nameEn": "Steamed gyoza",
        "src": "/menu/dishes/entradas-quentes/gyoza-a-vapor.webp"
      },
      {
        "id": "gyoza-de-camarao",
        "namePt": "Gyoza de Camarão",
        "nameEn": "Prawn gyoza",
        "src": "/menu/dishes/entradas-quentes/gyoza-de-camarao.webp"
      },
      {
        "id": "gyoza-frito",
        "namePt": "Gyoza Frito",
        "nameEn": "Fried gyoza",
        "src": "/menu/dishes/entradas-quentes/gyoza-frito.webp"
      },
      {
        "id": "hostias-de-camarao",
        "namePt": "Hóstias de Camarão",
        "nameEn": "Prawn crackers",
        "src": "/menu/dishes/entradas-quentes/hostias-de-camarao.webp"
      },
      {
        "id": "lula-panado",
        "namePt": "Lula Panado",
        "nameEn": "Breaded squid",
        "src": "/menu/dishes/entradas-quentes/lula-panado.webp"
      },
      {
        "id": "pao-a-vapor",
        "namePt": "Pão a Vapor",
        "nameEn": "Steamed bun",
        "src": "/menu/dishes/entradas-quentes/pao-a-vapor.webp"
      },
      {
        "id": "pao-com-recheio-doce",
        "namePt": "Pão com Recheio Doce",
        "nameEn": "Sweet filled bun",
        "src": "/menu/dishes/entradas-quentes/pao-com-recheio-doce.webp"
      },
      {
        "id": "pato-assado",
        "namePt": "Pato Assado",
        "nameEn": "Roast duck",
        "src": "/menu/dishes/entradas-quentes/pato-assado.webp"
      },
      {
        "id": "takoyaki",
        "namePt": "Takoyaki",
        "nameEn": "Takoyaki",
        "src": "/menu/dishes/entradas-quentes/takoyaki.webp"
      },
      {
        "id": "tempura-de-camarao",
        "namePt": "Tempura de Camarão",
        "nameEn": "Prawn tempura",
        "src": "/menu/dishes/entradas-quentes/tempura-de-camarao.webp"
      }
    ]
  },
  {
    "id": "fritos",
    "pt": "Fritos",
    "en": "Fried specialities",
    "descriptionPt": "Mais sabores crocantes para descobrir.",
    "descriptionEn": "More crispy bites to discover.",
    "items": [
      {
        "id": "bola-de-sesamo",
        "namePt": "Bola de Sésamo",
        "nameEn": "Sesame ball",
        "src": "/menu/dishes/fritos/bola-de-sesamo.webp"
      },
      {
        "id": "pao-frito",
        "namePt": "Pão Frito",
        "nameEn": "Fried bun",
        "src": "/menu/dishes/fritos/pao-frito.webp"
      },
      {
        "id": "tonkatsu-frango",
        "namePt": "Tonkatsu (frango)",
        "nameEn": "Chicken tonkatsu",
        "src": "/menu/dishes/fritos/tonkatsu-frango.webp"
      }
    ]
  },
  {
    "id": "sopas",
    "pt": "Sopas",
    "en": "Soups",
    "descriptionPt": "Um início quente e reconfortante.",
    "descriptionEn": "A warm and comforting start.",
    "items": [
      {
        "id": "sopa-de-miso",
        "namePt": "Sopa de Miso",
        "nameEn": "Miso soup",
        "src": "/menu/dishes/sopas/sopa-de-miso.webp"
      },
      {
        "id": "sopa-picante",
        "namePt": "Sopa Picante",
        "nameEn": "Spicy soup",
        "src": "/menu/dishes/sopas/sopa-picante.webp"
      }
    ]
  },
  {
    "id": "combinados",
    "pt": "Combinados",
    "en": "Sharing platters",
    "descriptionPt": "Uma seleção de sushi e sashimi à sua mesa.",
    "descriptionEn": "A selection of sushi and sashimi for the table.",
    "items": [
      {
        "id": "sushi-to-sashimi-grande",
        "namePt": "Sushi to Sashimi Grande",
        "nameEn": "Large sushi & sashimi platter",
        "src": "/menu/dishes/combinados/sushi-to-sashimi-grande.webp"
      },
      {
        "id": "sushi-to-sashimi-pequeno",
        "namePt": "Sushi to Sashimi Pequeno",
        "nameEn": "Small sushi & sashimi platter",
        "src": "/menu/dishes/combinados/sushi-to-sashimi-pequeno.webp"
      },
      {
        "id": "sushi-to-sashimi-toki",
        "namePt": "Sushi to Sashimi Toki",
        "nameEn": "TOKI sushi & sashimi platter",
        "src": "/menu/dishes/combinados/sushi-to-sashimi-toki.webp"
      }
    ]
  },
  {
    "id": "sashimi",
    "pt": "Sashimi",
    "en": "Sashimi",
    "descriptionPt": "O sabor do peixe, na sua forma mais simples.",
    "descriptionEn": "The flavour of fish in its simplest form.",
    "items": [
      {
        "id": "lagostim",
        "namePt": "Lagostim",
        "nameEn": "Langoustine",
        "src": "/menu/dishes/sashimi/lagostim.webp"
      },
      {
        "id": "sashimi-atum",
        "namePt": "Sashimi Atum",
        "nameEn": "Tuna sashimi",
        "src": "/menu/dishes/sashimi/sashimi-atum.webp"
      },
      {
        "id": "sashimi-misto",
        "namePt": "Sashimi Misto",
        "nameEn": "Mixed sashimi",
        "src": "/menu/dishes/sashimi/sashimi-misto.webp"
      },
      {
        "id": "sashimi-robalo",
        "namePt": "Sashimi Robalo",
        "nameEn": "Sea bass sashimi",
        "src": "/menu/dishes/sashimi/sashimi-robalo.webp"
      },
      {
        "id": "sashimi-salmao-beterraba",
        "namePt": "Sashimi Salmão Beterraba",
        "nameEn": "Salmon & beetroot sashimi",
        "src": "/menu/dishes/sashimi/sashimi-salmao-beterraba.webp"
      },
      {
        "id": "sashimi-salmao",
        "namePt": "Sashimi Salmão",
        "nameEn": "Salmon sashimi",
        "src": "/menu/dishes/sashimi/sashimi-salmao.webp"
      }
    ]
  },
  {
    "id": "nigiri",
    "pt": "Nigiri",
    "en": "Nigiri",
    "descriptionPt": "Clássicos de sushi, peça a peça.",
    "descriptionEn": "Sushi classics, one piece at a time.",
    "items": [
      {
        "id": "combinado-braseado",
        "namePt": "Combinado Braseado",
        "nameEn": "Seared sushi selection",
        "src": "/menu/dishes/nigiri/combinado-braseado.webp"
      },
      {
        "id": "nigiri-abacate",
        "namePt": "Nigiri Abacate",
        "nameEn": "Avocado nigiri",
        "src": "/menu/dishes/nigiri/nigiri-abacate.webp"
      },
      {
        "id": "nigiri-atum",
        "namePt": "Nigiri Atum",
        "nameEn": "Tuna nigiri",
        "src": "/menu/dishes/nigiri/nigiri-atum.webp"
      },
      {
        "id": "nigiri-camarao",
        "namePt": "Nigiri Camarão",
        "nameEn": "Prawn nigiri",
        "src": "/menu/dishes/nigiri/nigiri-camarao.webp"
      },
      {
        "id": "nigiri-enguia",
        "namePt": "Nigiri Enguia",
        "nameEn": "Eel nigiri",
        "src": "/menu/dishes/nigiri/nigiri-enguia.webp"
      },
      {
        "id": "nigiri-hotrainbow",
        "namePt": "Nigiri Hot Rainbow",
        "nameEn": "Hot Rainbow nigiri",
        "src": "/menu/dishes/nigiri/nigiri-hotrainbow.webp"
      },
      {
        "id": "nigiri-polvo",
        "namePt": "Nigiri Polvo",
        "nameEn": "Octopus nigiri",
        "src": "/menu/dishes/nigiri/nigiri-polvo.webp"
      },
      {
        "id": "nigiri-rainbow",
        "namePt": "Nigiri Rainbow",
        "nameEn": "Rainbow nigiri",
        "src": "/menu/dishes/nigiri/nigiri-rainbow.webp"
      },
      {
        "id": "nigiri-robalo",
        "namePt": "Nigiri Robalo",
        "nameEn": "Sea bass nigiri",
        "src": "/menu/dishes/nigiri/nigiri-robalo.webp"
      },
      {
        "id": "nigiri-salmao-braseado",
        "namePt": "Nigiri Salmão Braseado",
        "nameEn": "Seared salmon nigiri",
        "src": "/menu/dishes/nigiri/nigiri-salmao-braseado.webp"
      },
      {
        "id": "nigiri-salmao-manga",
        "namePt": "Nigiri Salmão Manga",
        "nameEn": "Salmon & mango nigiri",
        "src": "/menu/dishes/nigiri/nigiri-salmao-manga.webp"
      },
      {
        "id": "nigiri-salmao-mayo",
        "namePt": "Nigiri Salmão Mayo",
        "nameEn": "Salmon mayo nigiri",
        "src": "/menu/dishes/nigiri/nigiri-salmao-mayo.webp"
      },
      {
        "id": "nigiri-salmao",
        "namePt": "Nigiri Salmão",
        "nameEn": "Salmon nigiri",
        "src": "/menu/dishes/nigiri/nigiri-salmao.webp"
      }
    ]
  },
  {
    "id": "gunkan",
    "pt": "Gunkan",
    "en": "Gunkan",
    "descriptionPt": "Pequenas peças, combinações cheias de sabor.",
    "descriptionEn": "Small bites, full-flavoured combinations.",
    "items": [
      {
        "id": "gunkan-atum",
        "namePt": "Gunkan Atum",
        "nameEn": "Gunkan Tuna",
        "src": "/menu/dishes/gunkan/gunkan-atum.webp"
      },
      {
        "id": "sushi-gio-amendoa",
        "namePt": "Sushi Gio Amêndoa",
        "nameEn": "Sushi Gio Almond",
        "src": "/menu/dishes/gunkan/sushi-gio-amendoa.webp"
      },
      {
        "id": "sushi-gio-atum-braseado",
        "namePt": "Sushi Gio Atum Braseado",
        "nameEn": "Sushi Gio Tuna Seared",
        "src": "/menu/dishes/gunkan/sushi-gio-atum-braseado.webp"
      },
      {
        "id": "sushi-gio-atum",
        "namePt": "Sushi Gio Atum",
        "nameEn": "Sushi Gio Tuna",
        "src": "/menu/dishes/gunkan/sushi-gio-atum.webp"
      },
      {
        "id": "sushi-gio-caviale",
        "namePt": "Sushi Gio Caviale",
        "nameEn": "Sushi Gio Caviar",
        "src": "/menu/dishes/gunkan/sushi-gio-caviale.webp"
      },
      {
        "id": "sushi-gio-cebola",
        "namePt": "Sushi Gio Cebola",
        "nameEn": "Sushi Gio Onion",
        "src": "/menu/dishes/gunkan/sushi-gio-cebola.webp"
      },
      {
        "id": "sushi-gio-morango",
        "namePt": "Sushi Gio Morango",
        "nameEn": "Sushi Gio Strawberry",
        "src": "/menu/dishes/gunkan/sushi-gio-morango.webp"
      },
      {
        "id": "sushi-gio-ovo-cordoniz",
        "namePt": "Sushi Gio Ovo codorniz",
        "nameEn": "Sushi Gio Quail egg",
        "src": "/menu/dishes/gunkan/sushi-gio-ovo-cordoniz.webp"
      },
      {
        "id": "sushi-gio-pepino-amendoa",
        "namePt": "Sushi Gio Pepino Amêndoa",
        "nameEn": "Sushi Gio Cucumber Almond",
        "src": "/menu/dishes/gunkan/sushi-gio-pepino-amendoa.webp"
      },
      {
        "id": "sushi-gio-pepino-atum",
        "namePt": "Sushi Gio Pepino Atum",
        "nameEn": "Sushi Gio Cucumber Tuna",
        "src": "/menu/dishes/gunkan/sushi-gio-pepino-atum.webp"
      },
      {
        "id": "sushi-gio-pepino-salmao",
        "namePt": "Sushi Gio Pepino Salmão",
        "nameEn": "Sushi Gio Cucumber Salmon",
        "src": "/menu/dishes/gunkan/sushi-gio-pepino-salmao.webp"
      },
      {
        "id": "sushi-gio-robalo",
        "namePt": "Sushi Gio Robalo",
        "nameEn": "Sushi Gio Sea bass",
        "src": "/menu/dishes/gunkan/sushi-gio-robalo.webp"
      },
      {
        "id": "sushi-gio-salmao",
        "namePt": "Sushi Gio Salmão",
        "nameEn": "Sushi Gio Salmon",
        "src": "/menu/dishes/gunkan/sushi-gio-salmao.webp"
      },
      {
        "id": "sushi-gio-salmao-braseado",
        "namePt": "Sushi Gio Salmão Braseado",
        "nameEn": "Sushi Gio Salmon Seared",
        "src": "/menu/dishes/gunkan/sushi-gio-salmao-braseado.webp"
      },
      {
        "id": "sushi-gio-tobiko",
        "namePt": "Sushi Gio Tobiko",
        "nameEn": "Sushi Gio Tobiko",
        "src": "/menu/dishes/gunkan/sushi-gio-tobiko.webp"
      }
    ]
  },
  {
    "id": "uramaki",
    "pt": "Uramaki",
    "en": "Uramaki",
    "descriptionPt": "Rolos para descobrir novas combinações.",
    "descriptionEn": "Rolls to explore new combinations.",
    "items": [
      {
        "id": "urumaki-abacate",
        "namePt": "Uramaki Abacate",
        "nameEn": "Avocado uramaki",
        "src": "/menu/dishes/uramaki/urumaki-abacate.webp",
        "isNew": true
      },
      {
        "id": "urumaki-salmao-de-morango",
        "namePt": "Uramaki Salmão de Morango",
        "nameEn": "Salmon & strawberry uramaki",
        "src": "/menu/dishes/uramaki/urumaki-salmao-de-morango.webp",
        "isNew": true
      },
      {
        "id": "urumaki-amendoim-doce",
        "namePt": "Uramaki Amendoim doce",
        "nameEn": "Sweet peanut uramaki",
        "src": "/menu/dishes/uramaki/urumaki-amendoim-doce.webp",
        "isNew": true
      },
      {
        "id": "uramaki-atum-picante",
        "namePt": "Uramaki Atum Picante",
        "nameEn": "Spicy tuna uramaki",
        "src": "/menu/dishes/uramaki/uramaki-atum-picante.webp"
      },
      {
        "id": "uramaki-california",
        "namePt": "Uramaki California",
        "nameEn": "California uramaki",
        "src": "/menu/dishes/uramaki/uramaki-california.webp"
      },
      {
        "id": "uramaki-camarao-panado",
        "namePt": "Uramaki Camarão Panado",
        "nameEn": "Breaded prawn uramaki",
        "src": "/menu/dishes/uramaki/uramaki-camarao-panado.webp"
      },
      {
        "id": "uramaki-ebiten-dragon",
        "namePt": "Uramaki Ebiten Dragon",
        "nameEn": "Uramaki Ebiten Dragon",
        "src": "/menu/dishes/uramaki/uramaki-ebiten-dragon.webp"
      },
      {
        "id": "uramaki-ebiten-mango",
        "namePt": "Uramaki Ebiten Mango",
        "nameEn": "Uramaki Ebiten Mango",
        "src": "/menu/dishes/uramaki/uramaki-ebiten-mango.webp"
      },
      {
        "id": "uramaki-ebiten-onions",
        "namePt": "Uramaki Ebiten Onions",
        "nameEn": "Uramaki Ebiten Onions",
        "src": "/menu/dishes/uramaki/uramaki-ebiten-onions.webp"
      },
      {
        "id": "uramaki-ebiten-sake-hot-kateifi",
        "namePt": "Uramaki Ebiten Sake Hot Kataifi",
        "nameEn": "Uramaki Ebiten Sake Hot Kataifi",
        "src": "/menu/dishes/uramaki/uramaki-ebiten-sake-hot-kateifi.webp"
      },
      {
        "id": "uramaki-ebiten-sake-hot-mandorle",
        "namePt": "Uramaki Ebiten Sake Hot Mandorle",
        "nameEn": "Uramaki Ebiten Sake Hot Mandorle",
        "src": "/menu/dishes/uramaki/uramaki-ebiten-sake-hot-mandorle.webp"
      },
      {
        "id": "uramaki-ebiten-sake-hot-rucola",
        "namePt": "Uramaki Ebiten Sake Hot Rúcula",
        "nameEn": "Uramaki Ebiten Sake Hot Rocket",
        "src": "/menu/dishes/uramaki/uramaki-ebiten-sake-hot-rucola.webp"
      },
      {
        "id": "uramaki-extra-salmao-lemon",
        "namePt": "Uramaki Extra Salmão Lemon",
        "nameEn": "Extra salmon & lemon uramaki",
        "src": "/menu/dishes/uramaki/uramaki-extra-salmao-lemon.webp"
      },
      {
        "id": "uramaki-extra-salmao",
        "namePt": "Uramaki Extra Salmão",
        "nameEn": "Extra salmon uramaki",
        "src": "/menu/dishes/uramaki/uramaki-extra-salmao.webp"
      },
      {
        "id": "uramaki-manga",
        "namePt": "Uramaki Manga",
        "nameEn": "Mango uramaki",
        "src": "/menu/dishes/uramaki/uramaki-manga.webp"
      },
      {
        "id": "uramaki-ovo-cordoniz",
        "namePt": "Uramaki Ovo codorniz",
        "nameEn": "Quail egg uramaki",
        "src": "/menu/dishes/uramaki/uramaki-ovo-cordoniz.webp"
      },
      {
        "id": "uramaki-sake-hot-braseado-iceberg",
        "namePt": "Uramaki Sake Hot Braseado Iceberg",
        "nameEn": "Uramaki Sake Hot Seared Iceberg",
        "src": "/menu/dishes/uramaki/uramaki-sake-hot-braseado-iceberg.webp"
      },
      {
        "id": "uramaki-salmao-extra-morango",
        "namePt": "Uramaki Salmão Extra Morango",
        "nameEn": "Extra salmon & strawberry uramaki",
        "src": "/menu/dishes/uramaki/uramaki-salmao-extra-morango.webp"
      }
    ]
  },
  {
    "id": "hosomaki",
    "pt": "Hosomaki",
    "en": "Hosomaki",
    "descriptionPt": "Dos rolos clássicos às versões crocantes.",
    "descriptionEn": "From classic rolls to crispy variations.",
    "items": [
      {
        "id": "futomaki-salmao",
        "namePt": "Futomaki Salmão",
        "nameEn": "Salmon futomaki",
        "src": "/menu/dishes/hosomaki/futomaki-salmao.webp"
      },
      {
        "id": "hosomaki-abacate",
        "namePt": "Hosomaki Abacate",
        "nameEn": "Avocado hosomaki",
        "src": "/menu/dishes/hosomaki/hosomaki-abacate.webp"
      },
      {
        "id": "hosomaki-amendoa-frito",
        "namePt": "Hosomaki Amêndoa Frito",
        "nameEn": "Fried almond hosomaki",
        "src": "/menu/dishes/hosomaki/hosomaki-amendoa-frito.webp"
      },
      {
        "id": "hosomaki-atum-frito",
        "namePt": "Hosomaki Atum Frito",
        "nameEn": "Fried tuna hosomaki",
        "src": "/menu/dishes/hosomaki/hosomaki-atum-frito.webp"
      },
      {
        "id": "hosomaki-atum",
        "namePt": "Hosomaki Atum",
        "nameEn": "Tuna hosomaki",
        "src": "/menu/dishes/hosomaki/hosomaki-atum.webp"
      },
      {
        "id": "hosomaki-camarao",
        "namePt": "Hosomaki Camarão",
        "nameEn": "Prawn hosomaki",
        "src": "/menu/dishes/hosomaki/hosomaki-camarao.webp"
      },
      {
        "id": "hosomaki-manga-frito",
        "namePt": "Hosomaki Manga Frito",
        "nameEn": "Fried mango hosomaki",
        "src": "/menu/dishes/hosomaki/hosomaki-manga-frito.webp"
      },
      {
        "id": "hosomaki-morango-frito",
        "namePt": "Hosomaki Morango Frito",
        "nameEn": "Fried strawberry hosomaki",
        "src": "/menu/dishes/hosomaki/hosomaki-morango-frito.webp"
      },
      {
        "id": "hosomaki-pepino",
        "namePt": "Hosomaki Pepino",
        "nameEn": "Cucumber hosomaki",
        "src": "/menu/dishes/hosomaki/hosomaki-pepino.webp"
      },
      {
        "id": "hosomaki-salmao-frito",
        "namePt": "Hosomaki Salmão Frito",
        "nameEn": "Fried salmon hosomaki",
        "src": "/menu/dishes/hosomaki/hosomaki-salmao-frito.webp"
      },
      {
        "id": "hosomaki-salmao",
        "namePt": "Hosomaki Salmão",
        "nameEn": "Salmon hosomaki",
        "src": "/menu/dishes/hosomaki/hosomaki-salmao.webp"
      },
      {
        "id": "hot-frito-futomaki",
        "namePt": "Hot Frito Futomaki",
        "nameEn": "Hot fried futomaki",
        "src": "/menu/dishes/hosomaki/hot-frito-futomaki.webp"
      },
      {
        "id": "urahot",
        "namePt": "Urahot",
        "nameEn": "Urahot",
        "src": "/menu/dishes/hosomaki/urahot.webp"
      }
    ]
  },
  {
    "id": "temaki",
    "pt": "Temaki",
    "en": "Temaki",
    "descriptionPt": "Cones de alga com os seus sabores favoritos.",
    "descriptionEn": "Seaweed hand rolls with your favourite flavours.",
    "items": [
      {
        "id": "temaki-atum",
        "namePt": "Temaki Atum",
        "nameEn": "Tuna temaki",
        "src": "/menu/dishes/temaki/temaki-atum.webp"
      },
      {
        "id": "temaki-camarao-tempura",
        "namePt": "Temaki Camarão Tempura",
        "nameEn": "Prawn tempura temaki",
        "src": "/menu/dishes/temaki/temaki-camarao-tempura.webp"
      },
      {
        "id": "temaki-fruta",
        "namePt": "Temaki Fruta",
        "nameEn": "Fruit temaki",
        "src": "/menu/dishes/temaki/temaki-fruta.webp"
      },
      {
        "id": "temaki-salmao",
        "namePt": "Temaki Salmão",
        "nameEn": "Salmon temaki",
        "src": "/menu/dishes/temaki/temaki-salmao.webp"
      },
      {
        "id": "temaki-vegetariano",
        "namePt": "Temaki Vegetariano",
        "nameEn": "Vegetarian temaki",
        "src": "/menu/dishes/temaki/temaki-vegetariano.webp"
      }
    ]
  },
  {
    "id": "black-rice",
    "pt": "Black Rice",
    "en": "Black rice",
    "descriptionPt": "Uma forma diferente de saborear sushi.",
    "descriptionEn": "A different way to enjoy sushi.",
    "items": [
      {
        "id": "black-maki-salmao",
        "namePt": "Black Maki Salmão",
        "nameEn": "Black Maki Salmon",
        "src": "/menu/dishes/black-rice/black-maki-salmao.webp"
      },
      {
        "id": "black-nigiri-atum",
        "namePt": "Black Nigiri Atum",
        "nameEn": "Black Nigiri Tuna",
        "src": "/menu/dishes/black-rice/black-nigiri-atum.webp"
      },
      {
        "id": "black-nigiri-camarao",
        "namePt": "Black Nigiri Camarão",
        "nameEn": "Black Nigiri Prawn",
        "src": "/menu/dishes/black-rice/black-nigiri-camarao.webp"
      },
      {
        "id": "black-nigiri-polvo",
        "namePt": "Black Nigiri Polvo",
        "nameEn": "Black Nigiri Octopus",
        "src": "/menu/dishes/black-rice/black-nigiri-polvo.webp"
      },
      {
        "id": "black-nigiri-salmao",
        "namePt": "Black Nigiri Salmão",
        "nameEn": "Black Nigiri Salmon",
        "src": "/menu/dishes/black-rice/black-nigiri-salmao.webp"
      },
      {
        "id": "black-uramaki-ebiten",
        "namePt": "Black Uramaki Ebiten",
        "nameEn": "Black Uramaki Ebiten",
        "src": "/menu/dishes/black-rice/black-uramaki-ebiten.webp"
      },
      {
        "id": "black-uramaki-salmao-abacate",
        "namePt": "Black Uramaki Salmão Abacate",
        "nameEn": "Black Uramaki Salmon Avocado",
        "src": "/menu/dishes/black-rice/black-uramaki-salmao-abacate.webp"
      },
      {
        "id": "black-uramaki-salmao-manga",
        "namePt": "Black Uramaki Salmão Manga",
        "nameEn": "Black Uramaki Salmon Mango",
        "src": "/menu/dishes/black-rice/black-uramaki-salmao-manga.webp"
      }
    ]
  },
  {
    "id": "tataki-e-carpaccio",
    "pt": "Tataki e Carpaccio",
    "en": "Tataki & carpaccio",
    "descriptionPt": "Cortes delicados, sabores que surpreendem.",
    "descriptionEn": "Delicate slices and distinctive flavours.",
    "items": [
      {
        "id": "6",
        "namePt": "Tataki com molho",
        "nameEn": "Tataki with sauce",
        "src": "/menu/dishes/tataki-e-carpaccio/6.webp"
      },
      {
        "id": "carpaccio-di-salmone",
        "namePt": "Carpaccio de salmão",
        "nameEn": "Salmon carpaccio",
        "src": "/menu/dishes/tataki-e-carpaccio/carpaccio-di-salmone.webp"
      },
      {
        "id": "carpaccio-di-tonno",
        "namePt": "Carpaccio de atum",
        "nameEn": "Tuna carpaccio",
        "src": "/menu/dishes/tataki-e-carpaccio/carpaccio-di-tonno.webp"
      },
      {
        "id": "carpaccio-misto",
        "namePt": "Carpaccio Misto",
        "nameEn": "Mixed carpaccio",
        "src": "/menu/dishes/tataki-e-carpaccio/carpaccio-misto.webp"
      },
      {
        "id": "four-richly-seared-tuna-pieces",
        "namePt": "Tataki de atum",
        "nameEn": "Tuna tataki",
        "src": "/menu/dishes/tataki-e-carpaccio/four-richly-seared-tuna-pieces.webp"
      },
      {
        "id": "four-seared-fish-on-a-ceramic-plate",
        "namePt": "Peixe braseado",
        "nameEn": "Seared fish",
        "src": "/menu/dishes/tataki-e-carpaccio/four-seared-fish-on-a-ceramic-plate.webp"
      },
      {
        "id": "maguro-tartare",
        "namePt": "Tártaro de atum",
        "nameEn": "Tuna tartare",
        "src": "/menu/dishes/tataki-e-carpaccio/maguro-tartare.webp"
      },
      {
        "id": "sake-tartara",
        "namePt": "Tártaro de salmão",
        "nameEn": "Salmon tartare",
        "src": "/menu/dishes/tataki-e-carpaccio/sake-tartara.webp"
      },
      {
        "id": "sake-tataki",
        "namePt": "Tataki de salmão",
        "nameEn": "Salmon tataki",
        "src": "/menu/dishes/tataki-e-carpaccio/sake-tataki.webp"
      }
    ]
  },
  {
    "id": "poke",
    "pt": "Poke",
    "en": "Poke",
    "descriptionPt": "Uma taça cheia de cor e frescura.",
    "descriptionEn": "A bowl full of colour and freshness.",
    "items": [
      {
        "id": "poke-salmao",
        "namePt": "Poke Salmão",
        "nameEn": "Salmon poke",
        "src": "/menu/dishes/poke/poke-salmao.webp"
      }
    ]
  },
  {
    "id": "chapa-quente",
    "pt": "Chapa Quente",
    "en": "From the grill",
    "descriptionPt": "Espetadas servidas na chapa.",
    "descriptionEn": "Skewers from the grill.",
    "items": [
      {
        "id": "espetada-de-camarao",
        "namePt": "Espetada de Camarão",
        "nameEn": "Prawn skewers",
        "src": "/menu/dishes/chapa-quente/espetada-de-camarao.webp"
      },
      {
        "id": "espetada-de-frango",
        "namePt": "Espetada de Frango",
        "nameEn": "Chicken skewers",
        "src": "/menu/dishes/chapa-quente/espetada-de-frango.webp"
      }
    ]
  },
  {
    "id": "gambas",
    "pt": "Gambas",
    "en": "Prawns & squid",
    "descriptionPt": "Sabores do mar, da frigideira à mesa.",
    "descriptionEn": "Flavours of the sea, from the pan to your table.",
    "items": [
      {
        "id": "camarao-na-chapa",
        "namePt": "Camarão na Chapa",
        "nameEn": "Grilled prawns",
        "src": "/menu/dishes/gambas/camarao-na-chapa.webp"
      },
      {
        "id": "gambas-com-caril",
        "namePt": "Gambas com Caril",
        "nameEn": "Curry prawns",
        "src": "/menu/dishes/gambas/gambas-com-caril.webp"
      },
      {
        "id": "gambas-com-sal-e-pimenta",
        "namePt": "Gambas com Sal e Pimenta",
        "nameEn": "Salt and pepper prawns",
        "src": "/menu/dishes/gambas/gambas-com-sal-e-pimenta.webp"
      },
      {
        "id": "gambas-picante",
        "namePt": "Gambas Picante",
        "nameEn": "Spicy prawns",
        "src": "/menu/dishes/gambas/gambas-picante.webp"
      },
      {
        "id": "lula-salteado",
        "namePt": "Lula Salteado",
        "nameEn": "Stir-fried squid",
        "src": "/menu/dishes/gambas/lula-salteado.webp"
      }
    ]
  },
  {
    "id": "frango",
    "pt": "Frango",
    "en": "Chicken",
    "descriptionPt": "Do agridoce ao picante, para todos os gostos.",
    "descriptionEn": "From sweet and sour to spicy, something for every taste.",
    "items": [
      {
        "id": "frango-agridoce",
        "namePt": "Frango Agridoce",
        "nameEn": "Sweet and sour chicken",
        "src": "/menu/dishes/frango/frango-agridoce.webp"
      },
      {
        "id": "frango-com-caril",
        "namePt": "Frango com Caril",
        "nameEn": "Chicken curry",
        "src": "/menu/dishes/frango/frango-com-caril.webp"
      },
      {
        "id": "frango-picante",
        "namePt": "Frango Picante",
        "nameEn": "Spicy chicken",
        "src": "/menu/dishes/frango/frango-picante.webp"
      },
      {
        "id": "frango-salteado",
        "namePt": "Frango Salteado",
        "nameEn": "Stir-fried chicken",
        "src": "/menu/dishes/frango/frango-salteado.webp"
      }
    ]
  },
  {
    "id": "vaca-e-porco",
    "pt": "Vaca e Porco",
    "en": "Beef & pork",
    "descriptionPt": "Pratos de carne cheios de sabor.",
    "descriptionEn": "Full-flavoured meat dishes.",
    "items": [
      {
        "id": "bife-crocante-picante",
        "namePt": "Bife Crocante Picante",
        "nameEn": "Spicy crispy beef",
        "src": "/menu/dishes/vaca-e-porco/bife-crocante-picante.webp"
      },
      {
        "id": "bife-salteado",
        "namePt": "Bife Salteado",
        "nameEn": "Stir-fried beef",
        "src": "/menu/dishes/vaca-e-porco/bife-salteado.webp"
      },
      {
        "id": "carne-de-vaca-c-molho-de-ostra",
        "namePt": "Carne de vaca com molho de ostra",
        "nameEn": "Beef with oyster sauce",
        "src": "/menu/dishes/vaca-e-porco/carne-de-vaca-c-molho-de-ostra.webp"
      }
    ]
  },
  {
    "id": "massa",
    "pt": "Massa",
    "en": "Noodles",
    "descriptionPt": "Massas salteadas e sabores à maneira Thai.",
    "descriptionEn": "Stir-fried noodles and Thai-style flavours.",
    "items": [
      {
        "id": "massa-marisco",
        "namePt": "Massa Marisco",
        "nameEn": "Seafood noodles",
        "src": "/menu/dishes/massa/massa-marisco.webp"
      },
      {
        "id": "massa-salteado-de-frango",
        "namePt": "Massa Salteado de Frango",
        "nameEn": "Chicken stir-fried noodles",
        "src": "/menu/dishes/massa/massa-salteado-de-frango.webp"
      },
      {
        "id": "massa-salteado-vegetariano",
        "namePt": "Massa Salteado Vegetariano",
        "nameEn": "Vegetarian stir-fried noodles",
        "src": "/menu/dishes/massa/massa-salteado-vegetariano.webp"
      },
      {
        "id": "massa-thai-de-marisco",
        "namePt": "Massa Thai de Marisco",
        "nameEn": "Thai seafood noodles",
        "src": "/menu/dishes/massa/massa-thai-de-marisco.webp"
      },
      {
        "id": "massa-thai-de-vaca",
        "namePt": "Massa Thai de Vaca",
        "nameEn": "Thai beef noodles",
        "src": "/menu/dishes/massa/massa-thai-de-vaca.webp"
      }
    ]
  },
  {
    "id": "arroz",
    "pt": "Arroz",
    "en": "Rice",
    "descriptionPt": "O acompanhamento para completar a refeição.",
    "descriptionEn": "The perfect accompaniment to your meal.",
    "items": [
      {
        "id": "arroz-branco",
        "namePt": "Arroz Branco",
        "nameEn": "White rice",
        "src": "/menu/dishes/arroz/arroz-branco.webp"
      },
      {
        "id": "arroz-chau-chau-de-caril",
        "namePt": "Arroz Chau Chau de Caril",
        "nameEn": "Curry fried rice",
        "src": "/menu/dishes/arroz/arroz-chau-chau-de-caril.webp"
      },
      {
        "id": "arroz-chau-chau",
        "namePt": "Arroz Chau Chau",
        "nameEn": "Fried rice",
        "src": "/menu/dishes/arroz/arroz-chau-chau.webp"
      }
    ]
  }
];
