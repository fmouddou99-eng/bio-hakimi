import type { Category, Product } from '../types';

export const CATEGORIES: Category[] = [
  {
    id: 'wellness',
    name: { fr: 'Compléments & Bien-être', ar: 'مكملات العناية بالصحة' },
    tagline: {
      fr: 'Trésors naturels pour nourrir le corps de l\'intérieur',
      ar: 'كنوز طبيعية لتغذية الجسم من الداخل',
    },
    icon: 'pill',
  },
  {
    id: 'face-body',
    name: { fr: 'Visage & Corps', ar: 'الوجه والجسم' },
    tagline: {
      fr: 'Rituels ancestraux du hammam pour une peau sublimée',
      ar: 'طقوس الحمام التقليدية لبشرة مشرقة',
    },
    icon: 'flower',
  },
  {
    id: 'oils',
    name: { fr: 'Huiles naturelles pures', ar: 'زيوت طبيعية أصلية' },
    tagline: {
      fr: 'Pressées avec soin, pures et non transformées',
      ar: 'معصورة بعناية، نقية وغير معالجة',
    },
    icon: 'oil',
  },
  {
    id: 'hair',
    name: { fr: 'Cheveux', ar: 'الشعر' },
    tagline: {
      fr: 'Soin traditionnel pour des cheveux forts et denses',
      ar: 'عناية تقليدية لشعر قوي وكثيف',
    },
    icon: 'comb',
  },
  {
    id: 'honey',
    name: { fr: 'Miel pur', ar: 'العسل الحر' },
    tagline: {
      fr: 'Le trésor brut de la ruche marocaine',
      ar: 'كنز العسل الخام من المناحل المغربية',
    },
    icon: 'honey',
  },
];

const stdOilSizes = [
  { id: '30ml', label: { fr: '30ml', ar: '30 مل' }, price: 30 },
  { id: '50ml', label: { fr: '50ml', ar: '50 مل' }, price: 45 },
  { id: '100ml', label: { fr: '100ml', ar: '100 مل' }, price: 75 },
];

const deoVariants = [
  { id: 'jasmin', name: { fr: 'Jasmin', ar: 'الياسمين' } },
  { id: 'musc-blanc', name: { fr: 'Musc blanc', ar: 'المسك الأبيض' } },
  { id: 'vanille', name: { fr: 'Vanille', ar: 'الفانيلا' } },
  { id: 'citron', name: { fr: 'Citron', ar: 'الليمون' } },
  { id: 'orange', name: { fr: 'Orange', ar: 'البرتقال' } },
  { id: 'rose', name: { fr: 'Rose', ar: 'الورد' } },
];

export const PRODUCTS: Product[] = [
  // ---- Catégorie 1 : Compléments & Bien-être ----
  {
    id: 'proteine-naturelle',
    name: {
      fr: 'Protéine naturelle prise de poids',
      ar: 'بروتين طبيعي لزيادة الوزن',
    },
    description: {
      fr: 'Concentration ciblée sur les zones féminines, pour une prise de poids harmonieuse et naturelle.',
      ar: 'تركيز عالي على المناطق الأنثوية لزيادة وزن متناسقة وطبيعية.',
    },
    category: 'wellness',
    icon: 'seed',
    gradient: 'from-sage-200 to-sage-400',
    sizes: [{ id: '1kg', label: { fr: '1 kg', ar: '1 كغ' }, price: 220 }],
  },
  {
    id: 'graines-akbi',
    name: { fr: 'Graines d\'Akbi', ar: 'بذور الأكبي' },
    description: {
      fr: 'Graines précieuses réputées pour soutenir la vitalité et l\'équilibre du corps.',
      ar: 'بذور ثمينة معروفة بدعم الحيوية وتوازن الجسم.',
    },
    category: 'wellness',
    icon: 'seed',
    gradient: 'from-cream-200 to-cream-400',
    sizes: [
      { id: '250g', label: { fr: '250g', ar: '250 غ' }, price: 100 },
      { id: '500g', label: { fr: '500g', ar: '500 غ' }, price: 200 },
      { id: '1kg', label: { fr: '1kg', ar: '1 كغ' }, price: 380 },
    ],
  },
  {
    id: 'maca',
    name: { fr: 'Maca', ar: 'الماكا' },
    description: {
      fr: 'Racine péruvienne millénaire, tonifiant naturel de l\'énergie et de la vitalité.',
      ar: 'جذر بيروفي عريق، منشّط طبيعي للطاقة والحيوية.',
    },
    category: 'wellness',
    icon: 'root',
    gradient: 'from-sage-200 to-cream-300',
    sizes: [
      { id: '100g', label: { fr: '100g', ar: '100 غ' }, price: 40 },
      { id: '250g', label: { fr: '250g', ar: '250 غ' }, price: 100 },
    ],
  },
  {
    id: 'psyllium',
    name: { fr: 'Son de psyllium (Qattouna)', ar: 'نخالة القطونة' },
    description: {
      fr: 'Fibres douces pour le transit et la satiété, alliée bien-être au quotidien.',
      ar: 'ألياف ناعمة للهضم والشبع، حليف يومي للعناية بالصحة.',
    },
    category: 'wellness',
    icon: 'seed',
    gradient: 'from-cream-200 to-sage-200',
    sizes: [
      { id: '100g', label: { fr: '100g', ar: '100 غ' }, price: 30 },
      { id: '250g', label: { fr: '250g', ar: '250 غ' }, price: 75 },
    ],
  },
  {
    id: 'mastic-grec',
    name: { fr: 'Mastic grec authentique', ar: 'المسكة الحرة اليونانية الأصلية' },
    description: {
      fr: 'Résine rare de l\'île de Chios, trésor digestif aux vertus apaisantes.',
      ar: 'صمغ نادر من جزيرة خيوس، كنز هضمي بخصائص مهدّئة.',
    },
    category: 'wellness',
    icon: 'drop',
    gradient: 'from-gold-300 to-cream-300',
    sizes: [
      { id: '25g', label: { fr: '25g', ar: '25 غ' }, price: 100 },
      { id: '50g', label: { fr: '50g', ar: '50 غ' }, price: 200 },
    ],
  },
  {
    id: 'pollen-abeille',
    name: { fr: 'Pollen d\'abeille', ar: 'حبوب اللقاح' },
    description: {
      fr: 'Pollens frais de la ruche, concentré naturel d\'énergie et de vitalité.',
      ar: 'حبوب لقاح طازجة من المنحل، تركيز طبيعي للطاقة والحيوية.',
    },
    category: 'wellness',
    icon: 'honey',
    gradient: 'from-gold-300 to-gold-500',
    sizes: [
      { id: '100g', label: { fr: '100g', ar: '100 غ' }, price: 40 },
      { id: '250g', label: { fr: '250g', ar: '250 غ' }, price: 100 },
    ],
  },
  {
    id: 'gomme-arabique',
    name: { fr: 'Gomme arabique', ar: 'العلك (الصمغ العربي)' },
    description: {
      fr: 'Sève précieuse aux fibres douces, alliée de la digestion et de la beauté de la peau.',
      ar: 'نسغ ثمين بألياف ناعمة، حليف الهضم وجمال البشرة.',
    },
    category: 'wellness',
    icon: 'drop',
    gradient: 'from-cream-200 to-gold-300',
    sizes: [
      { id: '50g', label: { fr: '50g', ar: '50 غ' }, price: 30 },
      { id: '100g', label: { fr: '100g', ar: '100 غ' }, price: 60 },
    ],
  },
  {
    id: 'melange-anti-anemie',
    name: { fr: 'Mélange anti-anémie', ar: 'خلطة فقر الدم' },
    description: {
      fr: 'Composition traditionnelle de plantes et d\'ingrédients riches en fer, pour soutenir le sang et combattre la fatigue.',
      ar: 'خلطة تقليدية من الأعشاب ومكوّنات غنية بالحديد لدعم الدم ومحاربة التعب.',
    },
    category: 'wellness',
    icon: 'pill',
    gradient: 'from-terracotta-300 to-sage-400',
    sizes: [{ id: 'lot', label: { fr: 'Lot', ar: 'عبوة' }, price: 140 }],
  },

  // ---- Catégorie 2 : Visage & Corps ----
  {
    id: 'rassoul-royal',
    name: { fr: 'Rassoul royal (argile)', ar: 'التبريمة الملكية' },
    description: {
      fr: 'L\'argile minérale du hammam marocain, pour un teint purifié et une peau douce comme un secret ancestral.',
      ar: 'طين الحمام المغربي المعدني، لبشرة نقية وناعمة كسرّ عريق.',
    },
    category: 'face-body',
    icon: 'clay',
    gradient: 'from-sage-300 to-sage-500',
    sizes: [
      { id: '100g', label: { fr: '100g', ar: '100 غ' }, price: 35 },
      { id: '250g', label: { fr: '250g', ar: '250 غ' }, price: 70 },
      { id: '500g', label: { fr: '500g', ar: '500 غ' }, price: 140 },
      { id: '1kg', label: { fr: '1kg', ar: '1 كغ' }, price: 250 },
    ],
  },
  {
    id: 'masque-eclaircissant',
    name: {
      fr: 'Masque poudre éclaircissant & unifiant',
      ar: 'ماسك بودر لتفتيح وتوحيد لون البشرة',
    },
    description: {
      fr: 'Efface taches solaires et pigmentation pour un teint lumineux et unifié.',
      ar: 'يمحو آثار الشمس والتصبّغات للحصول على بشرة موحّدة ومشرقة.',
    },
    category: 'face-body',
    icon: 'powder',
    gradient: 'from-cream-200 to-cream-400',
    sizes: [{ id: 'lot', label: { fr: 'Lot', ar: 'عبوة' }, price: 40 }],
  },
  {
    id: 'creme-magique',
    name: {
      fr: 'Crème "magique" éclaircissante & unifiante',
      ar: 'كريم سحري لتفتيح وتوحيد لون البشرة',
    },
    description: {
      fr: 'Au lban dakar et à la réglisse, ce soin signature unifie le teint et ravive l\'éclat naturel.',
      ar: 'بلبان الذكر وعرق السوس، يوحّد لون البشرة ويعيد إليها إشراقتها الطبيعية.',
    },
    category: 'face-body',
    icon: 'cream',
    gradient: 'from-cream-200 to-gold-300',
    sizes: [{ id: 'lot', label: { fr: 'Lot', ar: 'عبوة' }, price: 70 }],
  },
  {
    id: 'creme-mains',
    name: { fr: 'Crème éclaircissante & hydratante mains', ar: 'كريم تفتيح وترطيب اليدين' },
    description: {
      fr: 'Soin des mains qui hydrate en profondeur tout en unifiant et éclaircissant la peau.',
      ar: 'عناية باليدين ترطّب بعمق وتوحّف وتفتّح البشرة.',
    },
    category: 'face-body',
    icon: 'cream',
    gradient: 'from-sage-100 to-cream-200',
    sizes: [{ id: 'lot', label: { fr: 'Lot', ar: 'عبوة' }, price: 40 }],
  },
  {
    id: 'beurre-corporel',
    name: { fr: 'Beurre corporel', ar: 'زبدة الجسم' },
    description: {
      fr: 'Texture fondante qui nourrit la peau sèche et la laisse souple, veloutée et parfumée.',
      ar: 'قوام يذوب على البشرة الجافة ويتركها ناعمة ومخمليّة وعطرة.',
    },
    category: 'face-body',
    icon: 'cream',
    gradient: 'from-cream-200 to-sage-200',
    sizes: [{ id: 'lot', label: { fr: 'Lot', ar: 'عبوة' }, price: 40 }],
  },
  {
    id: 'serum-cils',
    name: { fr: 'Sérum densité & pousse cils/sourcils', ar: 'سيروم تكثيف وتطويل الرموش والحواجب' },
    description: {
      fr: 'Sérum fortifiant qui densifie et allonge cils et sourcils, pour un regard intensifié.',
      ar: 'سيروم مقوٍ يكثّف ويطوّل الرموش والحواجب لإطلالة أقوى.',
    },
    category: 'face-body',
    icon: 'drop',
    gradient: 'from-sage-200 to-sage-400',
    sizes: [{ id: 'lot', label: { fr: 'Lot', ar: 'عبوة' }, price: 45 }],
  },
  {
    id: 'eau-rose',
    name: { fr: 'Eau de rose distillée', ar: 'ماء الورد المقطر' },
    description: {
      fr: 'Distillation pure de roses, tonifiant et apaisant, pour un teint frais et lumineux.',
      ar: 'تقطير نقي لورد منعش ومهدّئ، لبشرة مشرقة ومتجددة.',
    },
    category: 'face-body',
    icon: 'rose',
    gradient: 'from-terracotta-300 to-cream-200',
    sizes: [{ id: 'lot', label: { fr: 'Lot', ar: 'عبوة' }, price: 20 }],
  },
  {
    id: 'eau-rose-lban',
    name: { fr: 'Eau de rose au lban dakar', ar: 'مقطر الورد بلبان الذكر الأصلي' },
    description: {
      fr: 'Eau de rose enrichie au lban dakar, alliance ancestrale pour raffermir et illuminer.',
      ar: 'ماء ورد غنّي بلبان الذكر، تحالف عريق لشدّ البشرة وإشراقها.',
    },
    category: 'face-body',
    icon: 'rose',
    gradient: 'from-cream-200 to-terracotta-300',
    sizes: [{ id: 'lot', label: { fr: 'Lot', ar: 'عبوة' }, price: 30 }],
  },
  {
    id: 'baume-levres',
    name: { fr: 'Baume à lèvres', ar: 'مرطب الشفاه' },
    description: {
      fr: 'Baume nourrissant qui répare les lèvres sèches et les laisse douces et pulpeuses.',
      ar: 'مرطب يغذّي ويصلح الشفاه الجافة ويتركها ناعمة وممتلئة.',
    },
    category: 'face-body',
    icon: 'balm',
    gradient: 'from-terracotta-300 to-cream-300',
    sizes: [{ id: 'lot', label: { fr: 'Lot', ar: 'عبوة' }, price: 20 }],
  },
  {
    id: 'deodorant',
    name: { fr: 'Déodorant naturel', ar: 'مزيل رائحة العرق الطبيعي' },
    description: {
      fr: 'Formule 100% naturelle qui neutralise les odeurs tout en respectant votre peau.',
      ar: 'تركيبة طبيعية 100% تعادل الروائح وتحترم بشرتك.',
    },
    category: 'face-body',
    icon: 'drop',
    gradient: 'from-sage-200 to-cream-200',
    sizes: [{ id: 'lot', label: { fr: 'Lot', ar: 'عبوة' }, price: 50 }],
    variants: deoVariants,
    variantRequired: true,
  },
  {
    id: 'indigo',
    name: { fr: 'Indigo naturel', ar: 'النيلة الأصلية' },
    description: {
      fr: 'Pigment bleu naturel du Maroc, utilisé en soin et en teinture traditionnelle.',
      ar: 'صبغة زرقاء طبيعية من المغرب، تُستعمل في العناية والصباغة التقليدية.',
    },
    category: 'face-body',
    icon: 'powder',
    gradient: 'from-sage-300 to-sage-500',
    sizes: [
      { id: '100g', label: { fr: '100g', ar: '100 غ' }, price: 50 },
      { id: '250g', label: { fr: '250g', ar: '250 غ' }, price: 100 },
    ],
  },
  {
    id: 'gommage-corps',
    name: { fr: 'Gommage corporel (indigo, aker fassi, café)', ar: 'مقشر الجسم' },
    description: {
      fr: 'Mélange exfoliant traditionnel qui ressource la peau et lui rend son éclat.',
      ar: 'خلطة تقشير تقليدية تجدّد البشرة وتعيد إليها إشراقها.',
    },
    category: 'face-body',
    icon: 'powder',
    gradient: 'from-cream-300 to-terracotta-300',
    sizes: [{ id: 'lot', label: { fr: 'Lot', ar: 'عبوة' }, price: 45 }],
  },
  {
    id: 'serum-ongles',
    name: { fr: 'Sérum fortifiant & pousse des ongles', ar: 'سيروم تقوية وتطويل الأظافر' },
    description: {
      fr: 'Sérum fortifiant qui nourrit la matrice de l\'ongle et stimule une pousse saine.',
      ar: 'سيروم مقوٍ يغذّي مادة الظفر ويحفّز نموّه الصحّي.',
    },
    category: 'face-body',
    icon: 'drop',
    gradient: 'from-sage-200 to-cream-200',
    sizes: [{ id: 'lot', label: { fr: 'Lot', ar: 'عبوة' }, price: 40 }],
  },
  {
    id: 'soin-pieds',
    name: { fr: 'Soin réparateur & hydratant pieds', ar: 'مورد ومرطب القدمين' },
    description: {
      fr: 'Soin généreux qui répare les pieds secs et les laisse souples et confortables.',
      ar: 'عناية غنية تصلح القدمين الجاففتين وتتركهما ناعمتين ومريحتين.',
    },
    category: 'face-body',
    icon: 'balm',
    gradient: 'from-cream-200 to-sage-200',
    sizes: [{ id: 'lot', label: { fr: 'Lot', ar: 'عبوة' }, price: 40 }],
  },
  {
    id: 'baume-talons',
    name: { fr: 'Baume gerçures des talons', ar: 'مرهم تشققات القدمين' },
    description: {
      fr: 'Baume ciblé pour réparer les talons fissurés et prévenir les gerçures.',
      ar: 'مرهم موجّه لإصلاح تشقّقات القدمين والوقاية من الجفاف.',
    },
    category: 'face-body',
    icon: 'balm',
    gradient: 'from-terracotta-300 to-cream-300',
    sizes: [{ id: 'lot', label: { fr: 'Lot', ar: 'عبوة' }, price: 40 }],
  },
  {
    id: 'aker-fassi',
    name: { fr: 'Aker Fassi', ar: 'العكر الفاسي' },
    description: {
      fr: 'Pigment naturel de Fès, rouge profond, pour un maquillage traditionnel et un teint éclatant.',
      ar: 'صبغة طبيعية فاسية، حمراء عميقة، لمكياج تقليدي وبشرة مشرقة.',
    },
    category: 'face-body',
    icon: 'powder',
    gradient: 'from-terracotta-300 to-terracotta-500',
    sizes: [
      { id: '50g', label: { fr: '50g', ar: '50 غ' }, price: 40 },
      { id: '100g', label: { fr: '100g', ar: '100 غ' }, price: 70 },
    ],
  },
  {
    id: 'encens-oliban',
    name: { fr: 'Encens oliban d\'Oman pur (beauté)', ar: 'لبان الذكر العماني الأصلي للتجميل' },
    description: {
      fr: 'Résine précieuse d\'Oman, brûlée ou infusée, pour sublimer la peau et apaiser l\'esprit.',
      ar: 'صمغ عماني ثمين، يُحرق أو يُنقع، لتجميل البشرة وتهدئة الروح.',
    },
    category: 'face-body',
    icon: 'drop',
    gradient: 'from-cream-200 to-gold-400',
    sizes: [
      { id: '25g', label: { fr: '25g', ar: '25 غ' }, price: 25 },
      { id: '50g', label: { fr: '50g', ar: '50 غ' }, price: 50 },
      { id: '100g', label: { fr: '100g', ar: '100 غ' }, price: 100 },
    ],
  },
  {
    id: 'gant-hammam',
    name: { fr: 'Gant de gommage hammam (kiss)', ar: 'كيس الحمام (الليفة المغربية)' },
    description: {
      fr: 'Le gant traditionnel du hammam, essentiel pour exfolier et révéler une peau lisse et lumineuse.',
      ar: 'كيس الحمام التقليدي، أساسي لتقشير البشرة وكشف نعومتها وإشراقها.',
    },
    category: 'face-body',
    icon: 'glove',
    gradient: 'from-sage-200 to-sage-400',
    sizes: [{ id: 'lot', label: { fr: 'Unité', ar: 'قطعة' }, price: 20 }],
  },

  // ---- Catégorie 3 : Huiles naturelles pures ----
  {
    id: 'huile-amande',
    name: { fr: 'Huile d\'amande douce', ar: 'زيت اللوز الحلو' },
    description: {
      fr: 'Huile douce et nourrissante, idéale pour adoucir peau sèche et démaquiller en douceur.',
      ar: 'زيت ناعم ومغذٍ، مثالي لترطيب البشرة الجافة وإزالة المكياج بلطف.',
    },
    category: 'oils',
    icon: 'oil',
    gradient: 'from-cream-200 to-gold-300',
    sizes: stdOilSizes,
  },
  {
    id: 'huile-sesame',
    name: { fr: 'Huile de sésame', ar: 'زيت السمسم' },
    description: {
      fr: 'Huile dorée riche en antioxydants, alliée massage et soin nourrissant.',
      ar: 'زيت ذهبي غني بمضادات الأكسدة، حليف التدليك والعناية المغذية.',
    },
    category: 'oils',
    icon: 'oil',
    gradient: 'from-gold-300 to-cream-300',
    sizes: stdOilSizes,
  },
  {
    id: 'huile-moutarde',
    name: { fr: 'Huile de moutarde', ar: 'زيت الخردل' },
    description: {
      fr: 'Huile chauffante traditionnelle, réputée pour stimuler la pousse et fortifier les cheveux.',
      ar: 'زيت دافئ تقليدي، معروف بتحفيز نمو الشعر وتقويته.',
    },
    category: 'oils',
    icon: 'oil',
    gradient: 'from-gold-400 to-terracotta-400',
    sizes: stdOilSizes,
  },
  {
    id: 'huile-courge',
    name: { fr: 'Huile de graines de courge', ar: 'زيت بذور القرع' },
    description: {
      fr: 'Huile précieuse aux vertus fortifiantes, alliée bien-être et vitalité.',
      ar: 'زيت ثمين بخصائص مقوّية، حليف العناية والحيوية.',
    },
    category: 'oils',
    icon: 'oil',
    gradient: 'from-terracotta-300 to-gold-400',
    sizes: stdOilSizes,
  },
  {
    id: 'huile-lin',
    name: { fr: 'Huile de graines de lin', ar: 'زيت بذور الكتان' },
    description: {
      fr: 'Huile riche en oméga, précieuse pour la souplesse de la peau et l\'équilibre interne.',
      ar: 'زيت غني بالأوميغا، ثمين لمرونة البشرة والتوازن الداخلي.',
    },
    category: 'oils',
    icon: 'oil',
    gradient: 'from-sage-200 to-gold-300',
    sizes: stdOilSizes,
  },
  {
    id: 'huile-nigelle',
    name: { fr: 'Huile de nigelle (habba sawda)', ar: 'زيت الحبة السوداء' },
    description: {
      fr: 'L\'or noir des prophéties, huile précieuse aux multiples vertus pour peau, cheveux et immunité.',
      ar: 'الذهب الأسود، زيت ثمين بخصائص متعددة للبشرة والشعر والمناعة.',
    },
    category: 'oils',
    icon: 'oil',
    gradient: 'from-sage-700 to-sage-900',
    sizes: stdOilSizes,
  },
  {
    id: 'huile-jojoba',
    name: { fr: 'Huile de jojoba', ar: 'زيت الجوجوبا' },
    description: {
      fr: 'Cire liquide qui équilibre le sébum et pénètre sans laisser de film gras.',
      ar: 'شمع سائل يوازن الزيوت ويخترق دون ترك أثر دهني.',
    },
    category: 'oils',
    icon: 'oil',
    gradient: 'from-cream-200 to-sage-300',
    sizes: [
      { id: '30ml', label: { fr: '30ml', ar: '30 مل' }, price: 35 },
      { id: '50ml', label: { fr: '50ml', ar: '50 مل' }, price: 50 },
      { id: '100ml', label: { fr: '100ml', ar: '100 مل' }, price: 90 },
    ],
  },
  {
    id: 'huile-argan',
    name: { fr: 'Huile d\'argan', ar: 'زيت أرغان' },
    description: {
      fr: 'Pressée à froid dans le respect de la tradition, notre huile d\'argan nourrit en profondeur peau et cheveux sans laisser de film gras.',
      ar: 'معصورة على البارد بالطريقة التقليدية، زيت أرغان يغذّي بعمق البشرة والشعر دون أثر دهني.',
    },
    category: 'oils',
    icon: 'oil',
    gradient: 'from-gold-300 to-gold-500',
    sizes: [
      { id: '30ml', label: { fr: '30ml', ar: '30 مل' }, price: 40 },
      { id: '50ml', label: { fr: '50ml', ar: '50 مل' }, price: 65 },
      { id: '100ml', label: { fr: '100ml', ar: '100 مل' }, price: 120 },
    ],
  },
  {
    id: 'huile-coco',
    name: { fr: 'Huile de coco', ar: 'زيت جوز الهند' },
    description: {
      fr: 'Beurre fondu aux notes tropicales, nourrit cheveux et peau d\'une texture légère.',
      ar: 'زبدة ذائبة بنكهة استوائية، تغذّي الشعر والبشرة بقوام خفيف.',
    },
    category: 'oils',
    icon: 'oil',
    gradient: 'from-cream-100 to-cream-300',
    sizes: [
      { id: '100ml', label: { fr: '100ml', ar: '100 مل' }, price: 40 },
      { id: '200ml', label: { fr: '200ml', ar: '200 مل' }, price: 70 },
    ],
  },
  {
    id: 'huile-soin',
    name: {
      fr: 'Huile de soin (+20 plantes) anti-chute, fortifiante, densité',
      ar: 'زيت العناية (أزيد من 20 عشبة) لمكافحة تساقط الشعر وتقويته وتكثيفه',
    },
    description: {
      fr: 'Macération de plus de 20 plantes, huile signature anti-chute et de densité capillaire.',
      ar: 'نقع أكثر من 20 عشبة، زيت مميز لمكافحة التساقط وكثافة الشعر.',
    },
    category: 'oils',
    icon: 'oil',
    gradient: 'from-sage-500 to-sage-700',
    sizes: [{ id: 'lot', label: { fr: 'Lot', ar: 'عبوة' }, price: 110 }],
  },

  // ---- Catégorie 4 : Cheveux ----
  {
    id: 'poudre-sidr',
    name: { fr: 'Poudre de sidr (nabk)', ar: 'مسحوق السدر' },
    description: {
      fr: 'Poudre lavante naturelle qui nettoie le cuir chevelu en douceur, alternative saine au shampoing.',
      ar: 'بودرة غسيل طبيعية تنظّف فروة الرأس بلطف، بديل صحّي للشامبو.',
    },
    category: 'hair',
    icon: 'powder',
    gradient: 'from-sage-300 to-sage-500',
    sizes: [
      { id: '250g', label: { fr: '250g', ar: '250 غ' }, price: 45 },
      { id: '500g', label: { fr: '500g', ar: '500 غ' }, price: 85 },
      { id: '1kg', label: { fr: '1kg', ar: '1 كغ' }, price: 140 },
    ],
  },
  {
    id: 'mashat-golfe',
    name: { fr: 'Mashat du Golfe', ar: 'المشاط الخليجي' },
    description: {
      fr: 'Poudre précieuse du Golfe, réputée pour densifier et fortifier la fibre capillaire.',
      ar: 'بودرة ثمينة من الخليج، معروفة بكثافة الشعر وتقويته.',
    },
    category: 'hair',
    icon: 'powder',
    gradient: 'from-cream-300 to-gold-400',
    sizes: [
      { id: '250g', label: { fr: '250g', ar: '250 غ' }, price: 80 },
      { id: '500g', label: { fr: '500g', ar: '500 غ' }, price: 150 },
      { id: '1kg', label: { fr: '1kg', ar: '1 كغ' }, price: 300 },
    ],
  },
  {
    id: 'henne-cheveux',
    name: { fr: 'Henné cheveux', ar: 'حناء الشعر' },
    description: {
      fr: 'Henné pur pour colorer, fortifier et sublimer la chevelure d\'une teinte naturelle.',
      ar: 'حناء نقية للصبغ وتقوية وإبراز الشعر بلون طبيعي.',
    },
    category: 'hair',
    icon: 'powder',
    gradient: 'from-terracotta-400 to-terracotta-500',
    sizes: [
      { id: '250g', label: { fr: '250g', ar: '250 غ' }, price: 25 },
      { id: '500g', label: { fr: '500g', ar: '500 غ' }, price: 45 },
      { id: '1kg', label: { fr: '1kg', ar: '1 كغ' }, price: 75 },
    ],
  },
  {
    id: 'poudre-noyau-datte',
    name: { fr: 'Poudre de noyau de datte', ar: 'نواة التمر' },
    description: {
      fr: 'Poudre de noyau de datte, gommage naturel et fortifiant pour la chevelure.',
      ar: 'بودرة نواة التمر، تقشير طبيعي ومقوٍ للشعر.',
    },
    category: 'hair',
    icon: 'powder',
    gradient: 'from-terracotta-300 to-cream-300',
    sizes: [
      { id: '250g', label: { fr: '250g', ar: '250 غ' }, price: 70 },
      { id: '500g', label: { fr: '500g', ar: '500 غ' }, price: 125 },
    ],
  },
  {
    id: 'masque-huileux-sidr',
    name: { fr: 'Masque huileux sidr & plantes indiennes', ar: 'ماسك زيتي بالسدر والأعشاب الهندية' },
    description: {
      fr: 'Soin profond au sidr et plantes indiennes, pour nourrir intensément et relancer la pousse.',
      ar: 'عناية عميقة بالسدر والأعشاب الهندية، لتغذية مكثّفة وتحفيز النمو.',
    },
    category: 'hair',
    icon: 'balm',
    gradient: 'from-sage-400 to-sage-600',
    sizes: [{ id: 'lot', label: { fr: 'Lot', ar: 'عبوة' }, price: 120 }],
  },
  {
    id: 'spray-plantes',
    name: { fr: 'Spray aux plantes densité & anti-chute', ar: 'بخاخ الاعشاب لتكثيف الشعر ومكافحة التساقط' },
    description: {
      fr: 'Brume capillaire aux plantes, stimule la densité et freine la chute au quotidien.',
      ar: 'رذاذ شعري بالأعشاب، يحفّز الكثافة ويقلّل التساقط يومياً.',
    },
    category: 'hair',
    icon: 'spray',
    gradient: 'from-sage-200 to-sage-400',
    sizes: [{ id: 'lot', label: { fr: 'Lot', ar: 'عبوة' }, price: 40 }],
  },
  {
    id: 'masque-hydratant-cheveux',
    name: { fr: 'Masque hydratant & nourrissant cheveux', ar: 'ماسك ترطيب وتغذية الشعر' },
    description: {
      fr: 'Masque gorgé d\'actifs nourrissants pour cheveux secs, souplesse et brillance retrouvées.',
      ar: 'ماسك غني بمكوّنات مغذّية للشعر الجاف، لمرونة ولمعان مستعاد.',
    },
    category: 'hair',
    icon: 'balm',
    gradient: 'from-cream-200 to-sage-300',
    sizes: [{ id: 'lot', label: { fr: 'Lot', ar: 'عبوة' }, price: 100 }],
  },

  // ---- Catégorie 5 : Miel pur ----
  {
    id: 'miel-eucalyptus',
    name: { fr: 'Miel d\'eucalyptus', ar: 'عسل الكالبتوس' },
    description: {
      fr: 'Miel aromatique aux notes mentholées, apaisant des voies respiratoires et tonifiant.',
      ar: 'عسل عطري بنكهة النعناع، مهدّئ للجهاز التنفسي ومنشّط.',
    },
    category: 'honey',
    icon: 'honey',
    gradient: 'from-gold-300 to-gold-500',
    sizes: [
      { id: '250g', label: { fr: '250g', ar: '250 غ' }, price: 35 },
      { id: '500g', label: { fr: '500g', ar: '500 غ' }, price: 65 },
      { id: '1kg', label: { fr: '1kg', ar: '1 كغ' }, price: 130 },
    ],
  },
  {
    id: 'miel-dghmous',
    name: { fr: 'Miel de dghmous', ar: 'عسل الدغموس' },
    description: {
      fr: 'Miel rare et puissant, réputé pour ses vertus exceptionnelles sur la vitalité et l\'immunité.',
      ar: 'عسل نادر وقوي، معروف بخصائصه الاستثنائية على الحيوية والمناعة.',
    },
    category: 'honey',
    icon: 'honey',
    gradient: 'from-terracotta-400 to-gold-500',
    sizes: [
      { id: '250g', label: { fr: '250g', ar: '250 غ' }, price: 100 },
      { id: '500g', label: { fr: '500g', ar: '500 غ' }, price: 200 },
      { id: '1kg', label: { fr: '1kg', ar: '1 كغ' }, price: 400 },
    ],
  },
  {
    id: 'miel-sidr',
    name: { fr: 'Miel de sidr', ar: 'عسل السدر' },
    description: {
      fr: 'Récolté sur les fleurs de jujubier sauvage, ce miel rare est réputé pour ses vertus apaisantes et digestives — un trésor de la ruche marocaine.',
      ar: 'يُحصد من أزهار السدر البري، عسل نادر معروف بخصائصه المهدّئة والهضمية — كنز من المناحل المغربية.',
    },
    category: 'honey',
    icon: 'honey',
    gradient: 'from-gold-400 to-gold-600',
    sizes: [
      { id: '250g', label: { fr: '250g', ar: '250 غ' }, price: 50 },
      { id: '500g', label: { fr: '500g', ar: '500 غ' }, price: 100 },
      { id: '1kg', label: { fr: '1kg', ar: '1 كغ' }, price: 180 },
    ],
  },
  {
    id: 'miel-thym',
    name: { fr: 'Miel de thym (zaïtra)', ar: 'عسل الزعيترة' },
    description: {
      fr: 'Miel de thym sauvage, parfumé et puissant, allié respiratoire et digestif réputé.',
      ar: 'عسل الزعتر البري، عطري وقوي، حليف تنفّسي وهضمي معروف.',
    },
    category: 'honey',
    icon: 'honey',
    gradient: 'from-gold-300 to-terracotta-400',
    sizes: [
      { id: '250g', label: { fr: '250g', ar: '250 غ' }, price: 65 },
      { id: '500g', label: { fr: '500g', ar: '500 غ' }, price: 125 },
      { id: '1kg', label: { fr: '1kg', ar: '1 كغ' }, price: 250 },
    ],
  },
  {
    id: 'miel-plantes',
    name: { fr: 'Miel aux plantes', ar: 'عسل الاعشاب' },
    description: {
      fr: 'Miel polyfloral aux essences du Maroc, bouquet aromatique riche en bienfaits.',
      ar: 'عسل متعدد الأزهار بنكهات المغرب، باقة عطرية غنية بالفوائد.',
    },
    category: 'honey',
    icon: 'honey',
    gradient: 'from-sage-300 to-gold-400',
    sizes: [
      { id: '250g', label: { fr: '250g', ar: '250 غ' }, price: 75 },
      { id: '500g', label: { fr: '500g', ar: '500 غ' }, price: 150 },
      { id: '1kg', label: { fr: '1kg', ar: '1 كغ' }, price: 290 },
    ],
  },
  {
    id: 'miel-caroube',
    name: { fr: 'Miel de caroube', ar: 'عسل الخروب' },
    description: {
      fr: 'Miel sombre et peu sucré, trésor réputé pour l\'énergie et l\'équilibre métabolique.',
      ar: 'عسل داكن وقليل السكر، كنز معروف بالطاقة والتوازن الأيضي.',
    },
    category: 'honey',
    icon: 'honey',
    gradient: 'from-sage-700 to-gold-600',
    sizes: [
      { id: '250g', label: { fr: '250g', ar: '250 غ' }, price: 45 },
      { id: '500g', label: { fr: '500g', ar: '500 غ' }, price: 90 },
      { id: '1kg', label: { fr: '1kg', ar: '1 كغ' }, price: 180 },
    ],
  },
];
