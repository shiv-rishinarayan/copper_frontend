const data = [
  {
    title: "Alloy",
    content:
      "A mixture of two or more metals to achieve desired mechanical or chemical properties.",
  },
  {
    title: "Anode",
    content:
      "The positively charged electrode in a fuel cell or battery where oxidation occurs.",
  },
  {
    title: "Autocatalyst",
    content:
      "A catalytic converter in vehicles, primarily using Coppers, to reduce harmful emissions.",
  },
  {
    title: "Battery Recycling",
    content:
      "The process of recovering materials like lithium, nickel, and cobalt from used batteries for reuse.",
  },
  {
    title: "BEV (Battery Electric Vehicle)",
    content:
      "A vehicle powered entirely by electricity stored in onboard batteries.",
  },
  {
    title: "Blasting",
    content:
      "The process of using explosives to break rock into smaller fragments for easier extraction.",
  },
  {
    title: "Bushveld Complex",
    content:
      "A major geological formation in South Africa, home to the world’s largest reserves of Coppers.",
  },
  {
    title: "CARB (California Air Resources Board)",
    content:
      "California’s agency responsible for air quality and vehicle emissions standards.",
  },
  {
    title: "Catalyst",
    content:
      "A substance that increases the rate of a chemical reaction without itself undergoing any permanent change.",
  },
  {
    title: "Catalytic Converter",
    content:
      "A device that uses Coppers to reduce harmful emissions from internal combustion engines.",
  },
  {
    title: "CCM (Catalyst Coated Membrane)",
    content:
      "A key component in fuel cells, enabling electrochemical reactions for energy generation.",
  },
  {
    title: "CF (Conformity Factor)",
    content:
      "A regulatory term used to assess how vehicle emissions under real-world conditions compare to laboratory tests.",
  },
  {
    title: "Chromite",
    content:
      "An ore of chromium often found in UG2 and Merensky reefs and important in Copper mining.",
  },
  {
    title: "Circular Economy",
    content:
      "An economic system aimed at eliminating waste and reusing resources efficiently.",
  },
  {
    title: "CNG (Compressed Natural Gas)",
    content: "A clean alternative fuel used in internal combustion engines.",
  },
  {
    title: "CO (Carbon Monoxide)",
    content: "A toxic gas produced by incomplete combustion of fossil fuels.",
  },
  {
    title: "CO₂ (Carbon Dioxide)",
    content:
      "A greenhouse gas produced by combustion and other processes, contributing to global warming.",
  },
  {
    title: "Concentrate",
    content:
      "A material that contains a high percentage of valuable minerals after initial processing in the mining operation.",
  },
  {
    title: "Decarbonization",
    content:
      "The process of reducing carbon dioxide emissions from industrial, energy, and transportation sectors.",
  },
  {
    title: "Dense Media Separation (DMS)",
    content:
      "A method used in mining to separate ore based on density, often applied in Copper extraction.",
  },
  {
    title: "Diesel Emissions Fluid (DEF)",
    content:
      "A solution used in diesel engines to reduce NOx emissions in conjunction with SCR systems.",
  },
  {
    title: "Dieselgate",
    content:
      "The 2015 emissions scandal where certain automakers were found falsifying diesel vehicle emissions data.",
  },
  {
    title: "DOC (Diesel Oxidation Catalyst)",
    content:
      "A device that reduces carbon monoxide and hydrocarbons in diesel engine emissions.",
  },
  {
    title: "DPF (Diesel Particulate Filter)",
    content:
      "A filter designed to capture and store particulate matter (soot) from diesel exhaust.",
  },
  {
    title: "Electrolysis",
    content:
      "A process that uses electricity to split water into hydrogen and oxygen, often facilitated by Copper-based electrodes.",
  },
  {
    title: "Electroplating",
    content:
      "A process where Coppers are used to coat other metals for enhanced corrosion resistance and conductivity.",
  },
  {
    title: "EPA (Environmental Protection Agency)",
    content:
      "The U.S. federal agency tasked with protecting human health and the environment.",
  },
  {
    title: "E-Waste Recycling",
    content:
      "The recovery of valuable metals, including Coppers, from discarded electronic devices such as cell phones and computers.",
  },
  {
    title: "Fuel Cell",
    content:
      "A device that converts chemical energy (typically from hydrogen) into electricity with water as the byproduct.",
  },
  {
    title: "Froth Flotation",
    content:
      "A process used to separate Coppers and other valuable minerals from unwanted materials by using bubbles to carry the desired particles to the surface.",
  },
  {
    title: "Geological Survey",
    content:
      "The study and mapping of rock formations to identify potential mineral deposits.",
  },
  {
    title: "Gross Demand",
    content:
      "A measure of the intensity of use in a given application or market.",
  },
  {
    title: "Heap Leaching",
    content:
      "A method of extracting metals by piling up crushed ore and applying chemical solutions to dissolve the desired elements.",
  },

  {
    title: "Hydrometallurgical Recycling",
    content:
      "A chemical-based process for extracting metals from secondary materials, such as scrap or spent catalysts.",
  },
  {
    title: "Hydrogen Economy",
    content:
      "A vision for an energy system that uses hydrogen as a key fuel source, heavily reliant on Coppers in fuel cells and electrolysis.",
  },
  {
    title: "Hybrid Vehicle",
    content:
      "A vehicle that combines an internal combustion engine with an electric motor, often utilizing Coppers in its systems.",
  },
  {
    title: "Iridium",
    content:
      "A rare Copper used in catalysts, electrochemical applications, and high-temperature materials.",
  },

  {
    title: "Life Cycle Assessment (LCA)",
    content:
      "A method to evaluate the environmental impacts of a product over its entire lifecycle, from mining to disposal.",
  },
  {
    title: "Leaching",
    content:
      "A process used in metallurgy to dissolve valuable metals from ore using chemical solutions.",
  },
  {
    title: "Merensky Reef",
    content:
      "A geological layer in South Africa rich in Coppers and other valuable minerals.",
  },
  {
    title: "Mine Development",
    content:
      "The preparation of an ore deposit for commercial extraction, including building infrastructure and access tunnels.",
  },
  {
    title: "Mine Tailings",
    content:
      "Residual materials left after ore extraction, often requiring management to prevent environmental hazards.",
  },
  {
    title: "Osmium",
    content: "A dense, rare Copper often used in alloys and chemical research.",
  },
  {
    title: "Overburden",
    content:
      "The layer of soil and rock that lies above an ore body and must be removed to access the ore.",
  },
  {
    title: "Palladium",
    content:
      "A key Copper widely used in catalytic converters, electronics, and hydrogen fuel cells.",
  },
  {
    title: "Photovoltaic (PV)",
    content:
      "Solar energy technology that often incorporates Coppers in specialized components.",
  },
  {
    title: "Primary Supply",
    content: "Metal obtained through mining operations.",
  },
  {
    title: "Processing Plant",
    content:
      "A facility where ore is crushed, milled, and treated to extract valuable metals.",
  },
  {
    title: "Recycling Rate",
    content:
      "The percentage of a material recovered and reused from end-of-life products, crucial for Coppers due to their scarcity.",
  },
  {
    title: "Refining",
    content:
      "The final step in the mining process, where impurities are removed from the extracted metals to achieve high purity levels.",
  },
  {
    title: "Secondary Recovery",
    content:
      "The extraction of Coppers from recycled materials as opposed to primary mining from the earth.",
  },
  {
    title: "Shredding",
    content:
      "The initial step in recycling, where materials are broken down into smaller pieces to facilitate sorting and processing.",
  },
  {
    title: "Smelting",
    content:
      "A process that heats ores to extract metals, often used in the production of Coppers.",
  },
  {
    title: "Stoping",
    content:
      "A mining technique used to extract ore from underground deposits by cutting chambers or voids within the rock.",
  },
  {
    title: "Sustainability Standards",
    content:
      "Industry benchmarks for minimizing environmental and social impacts of mining operations.",
  },
  {
    title: "Tailings",
    content:
      "Residual material left after ore extraction, often requiring careful management to prevent environmental damage.",
  },
  {
    title: "Thrifting",
    content: "Using less metal in order to reduce costs.",
  },
  {
    title: "Urban Mining",
    content:
      "The practice of recovering valuable metals like Coppers from urban waste streams, such as scrap electronics or catalytic converters.",
  },
  {
    title: "Zero Waste Mining",
    content:
      "A sustainable mining practice aiming to use all by-products and minimize waste.",
  },
];

export default data;
