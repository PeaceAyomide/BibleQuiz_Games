const bibleQuestions = [
    {
      question: 'Who was swallowed by a great fish?',
      correct_answer: 'Jonah',
      incorrect_answers: ['Elijah', 'Moses', 'Daniel'],
    },
    {
      question: 'What is the longest book in the Bible?',
      correct_answer: 'Psalms',
      incorrect_answers: ['Genesis', 'Isaiah', 'Matthew'],
    },
    {
      question: 'Who led the Israelites into the Promised Land?',
      correct_answer: 'Joshua',
      incorrect_answers: ['Moses', 'Aaron', 'Caleb'],
    },
    {
      question: 'Who was the wife of King Ahab known for her wickedness?',
      correct_answer: 'Jezebel',
      incorrect_answers: ['Esther', 'Ruth', 'Hagar'],
    },
    {
      question: 'What food did God provide the Israelites in the wilderness?',
      correct_answer: 'Manna',
      incorrect_answers: ['Quail', 'Fish', 'Bread'],
    },
    {
      question: 'How many brothers did Joseph have?',
      correct_answer: '11',
      incorrect_answers: ['10', '12', '9'],
    },
    {
      question: 'Which disciple denied Jesus three times?',
      correct_answer: 'Peter',
      incorrect_answers: ['Judas', 'Thomas', 'Andrew'],
    },
    {
      question: 'Who was the tax collector that climbed a tree to see Jesus?',
      correct_answer: 'Zacchaeus',
      incorrect_answers: ['Matthew', 'Nicodemus', 'Simon'],
    },
    {
      question: 'What was the first plague in Egypt?',
      correct_answer: 'Water turned to blood',
      incorrect_answers: ['Frogs', 'Darkness', 'Locusts'],
    },
    {
      question: 'Who was the strongest man in the Bible?',
      correct_answer: 'Samson',
      incorrect_answers: ['David', 'Goliath', 'Saul'],
    },
    {
      question: 'Who wrote the majority of the New Testament?',
      correct_answer: 'Paul',
      incorrect_answers: ['Peter', 'John', 'Luke'],
    },
    {
      question: 'What type of bird brought Elijah food while he was hiding?',
      correct_answer: 'Ravens',
      incorrect_answers: ['Doves', 'Eagles', 'Pigeons'],
    },
    {
      question: 'Who killed Goliath?',
      correct_answer: 'David',
      incorrect_answers: ['Saul', 'Samuel', 'Jonathan'],
    },
    {
      question: 'Which city’s walls fell after the Israelites marched around them?',
      correct_answer: 'Jericho',
      incorrect_answers: ['Bethlehem', 'Nazareth', 'Hebron'],
    },
    {
      question: 'What is the last book of the Bible?',
      correct_answer: 'Revelation',
      incorrect_answers: ['Hebrews', 'Acts', 'Jude'],
    },
    {
      question: 'Who was the first murderer in the Bible?',
      correct_answer: 'Cain',
      incorrect_answers: ['Esau', 'Abel', 'Lamech'],
    },
    {
      question: 'What was the name of the man who was raised from the dead by Jesus?',
      correct_answer: 'Lazarus',
      incorrect_answers: ['Nicodemus', 'Zacchaeus', 'Simon'],
    },
    {
      question: 'Who was the queen who saved her people from destruction?',
      correct_answer: 'Esther',
      incorrect_answers: ['Deborah', 'Ruth', 'Naomi'],
    },
    {
      question: 'What was Paul’s name before his conversion?',
      correct_answer: 'Saul',
      incorrect_answers: ['Simon', 'Barnabas', 'Timothy'],
    },
    {
      question: 'What weapon did David use to kill Goliath?',
      correct_answer: 'A sling and a stone',
      incorrect_answers: ['A sword', 'A spear', 'A bow and arrow'],
    },
    {
      question: 'What did the three wise men bring to Jesus?',
      correct_answer: 'Gold, frankincense, and myrrh',
      incorrect_answers: ['Silver, gold, and incense', 'Gold, myrrh, and wine', 'Oil, spices, and silver'],
    },
    {
      question: 'What was the occupation of Matthew before following Jesus?',
      correct_answer: 'Tax Collector',
      incorrect_answers: ['Fisherman', 'Carpenter', 'Shepherd'],
    },
    {
      question: 'Who was known as the father of many nations?',
      correct_answer: 'Abraham',
      incorrect_answers: ['Isaac', 'Jacob', 'Joseph'],
    },
    {
      question: 'What does the name "Emmanuel" mean?',
      correct_answer: 'God with us',
      incorrect_answers: ['God saves', 'Prince of peace', 'King of kings'],
    },
    {
      question: 'How many people were saved on Noah’s ark?',
      correct_answer: '8',
      incorrect_answers: ['10', '7', '12'],
    },
    {
      question: 'What river did John the Baptist baptize Jesus in?',
      correct_answer: 'Jordan',
      incorrect_answers: ['Nile', 'Euphrates', 'Tigris'],
    },
    {
      question: 'Who interpreted Nebuchadnezzar’s dream?',
      correct_answer: 'Daniel',
      incorrect_answers: ['Joseph', 'Ezekiel', 'Elijah'],
    },
    {
      question: 'What was written above Jesus on the cross?',
      correct_answer: 'King of the Jews',
      incorrect_answers: ['Son of God', 'The Messiah', 'Prince of Peace'],
    },
    {
      question: 'Who was the first person to see the risen Jesus?',
      correct_answer: 'Mary Magdalene',
      incorrect_answers: ['Peter', 'John', 'James'],
    },
    {
        question: 'What was the first miracle performed by Jesus?',
        correct_answer: 'Turning water into wine',
        incorrect_answers: ['Healing the blind man', 'Feeding the 5,000', 'Walking on water'],
      },
      {
        question: 'Who was the first king of Israel?',
        correct_answer: 'Saul',
        incorrect_answers: ['David', 'Solomon', 'Samuel'],
      },
      {
        question: 'What is the shortest verse in the Bible?',
        correct_answer: 'Jesus wept',
        incorrect_answers: ['God is love', 'Rejoice always', 'Pray without ceasing'],
      },
      {
        question: 'How many days did it rain during the flood in Noah’s time?',
        correct_answer: '40',
        incorrect_answers: ['7', '30', '50'],
      },
      {
        question: 'What was the name of Moses’ sister?',
        correct_answer: 'Miriam',
        incorrect_answers: ['Hannah', 'Deborah', 'Ruth'],
      },
      {
        question: 'Who betrayed Jesus for 30 pieces of silver?',
        correct_answer: 'Judas Iscariot',
        incorrect_answers: ['Peter', 'Thomas', 'Andrew'],
      },
      {
        question: 'Which book in the Bible talks about the valley of dry bones?',
        correct_answer: 'Ezekiel',
        incorrect_answers: ['Isaiah', 'Jeremiah', 'Daniel'],
      },
      {
        question: 'What were the names of the two faithful spies sent into Canaan?',
        correct_answer: 'Joshua and Caleb',
        incorrect_answers: ['Moses and Aaron', 'David and Jonathan', 'Elijah and Elisha'],
      },
      {
        question: 'Who built the first temple in Jerusalem?',
        correct_answer: 'Solomon',
        incorrect_answers: ['David', 'Saul', 'Hezekiah'],
      },
      {
        question: 'Which apostle was a doctor?',
        correct_answer: 'Luke',
        incorrect_answers: ['Matthew', 'John', 'Paul'],
      },
      {
        question: 'What was the name of the Philistine god whose temple Samson destroyed?',
        correct_answer: 'Dagon',
        incorrect_answers: ['Baal', 'Asherah', 'Molech'],
      },
      {
        question: 'What was the first bird Noah sent out from the ark?',
        correct_answer: 'Raven',
        incorrect_answers: ['Dove', 'Eagle', 'Sparrow'],
      },
      {
        question: 'What was the name of Abraham’s nephew?',
        correct_answer: 'Lot',
        incorrect_answers: ['Isaac', 'Ishmael', 'Esau'],
      },
      {
        question: 'Who was stoned to death for preaching about Jesus in the New Testament?',
        correct_answer: 'Stephen',
        incorrect_answers: ['Paul', 'James', 'John'],
      },
      {
        question: 'What type of tree did Zacchaeus climb to see Jesus?',
        correct_answer: 'Sycamore',
        incorrect_answers: ['Oak', 'Fig', 'Cedar'],
      },
      {
        question: 'What was the name of the high priest who put Jesus on trial?',
        correct_answer: 'Caiaphas',
        incorrect_answers: ['Annas', 'Nicodemus', 'Pilate'],
      },
      {
        question: 'Who was the Roman governor who sentenced Jesus to be crucified?',
        correct_answer: 'Pontius Pilate',
        incorrect_answers: ['Herod', 'Felix', 'Festus'],
      },
      {
        question: 'What did God create on the fourth day?',
        correct_answer: 'Sun, moon, and stars',
        incorrect_answers: ['Land and seas', 'Plants', 'Animals'],
      },
      {
        question: 'Who was the prophet that confronted King David about his sin with Bathsheba?',
        correct_answer: 'Nathan',
        incorrect_answers: ['Samuel', 'Elijah', 'Elisha'],
      },
      {
        question: 'What did the Israelites carry across the Jordan River?',
        correct_answer: 'The Ark of the Covenant',
        incorrect_answers: ['The Ten Commandments', 'The Tabernacle', 'Sacrifices'],
      },
      {
        question: 'What city was Jonah sent to preach in?',
        correct_answer: 'Nineveh',
        incorrect_answers: ['Babylon', 'Jericho', 'Sodom'],
      },
      {
        question: 'What was the name of Jacob’s youngest son?',
        correct_answer: 'Benjamin',
        incorrect_answers: ['Joseph', 'Levi', 'Judah'],
      },
      {
        question: 'Who gave Solomon the plans for building the temple?',
        correct_answer: 'David',
        incorrect_answers: ['Samuel', 'Nathan', 'Elijah'],
      },
      {
        question: 'What did Peter do when Jesus was arrested?',
        correct_answer: 'Cut off a servant’s ear',
        incorrect_answers: ['Denied Jesus', 'Ran away', 'Defended Jesus'],
      },
      {
        question: 'Which apostle walked on water with Jesus?',
        correct_answer: 'Peter',
        incorrect_answers: ['John', 'James', 'Andrew'],
      },
      {
        question: 'How many loaves of bread did Jesus use to feed the 5,000?',
        correct_answer: '5',
        incorrect_answers: ['7', '3', '2'],
      },
      {
        question: 'What type of animal spoke to Balaam?',
        correct_answer: 'Donkey',
        incorrect_answers: ['Horse', 'Lion', 'Camel'],
      },
      {
        question: 'Who was the first Christian martyr?',
        correct_answer: 'Stephen',
        incorrect_answers: ['Peter', 'Paul', 'James'],
      },
      {
        question: 'What festival was being celebrated when the Holy Spirit descended on the apostles?',
        correct_answer: 'Pentecost',
        incorrect_answers: ['Passover', 'Feast of Tabernacles', 'Hanukkah'],
      },
      {
        question: 'What did God use to speak to Moses in the wilderness?',
        correct_answer: 'A burning bush',
        incorrect_answers: ['A dove', 'A thunderstorm', 'A scroll'],
      },
      {
        question: 'Who was swallowed by a great fish?',
        correct_answer: 'Jonah',
        incorrect_answers: ['Elijah', 'Noah', 'Daniel'],
      },
      {
        question: 'What was the first plague that God sent upon Egypt?',
        correct_answer: 'Turning water into blood',
        incorrect_answers: ['Locusts', 'Darkness', 'Boils'],
      },
      {
        question: 'Who led the Israelites into the Promised Land?',
        correct_answer: 'Joshua',
        incorrect_answers: ['Moses', 'Aaron', 'Caleb'],
      },
      {
        question: 'What was the occupation of Matthew before following Jesus?',
        correct_answer: 'Tax collector',
        incorrect_answers: ['Fisherman', 'Carpenter', 'Shepherd'],
      },
      {
        question: 'How many years did the Israelites wander in the desert?',
        correct_answer: '40 years',
        incorrect_answers: ['10 years', '20 years', '50 years'],
      },
      {
        question: 'Who was the wife of King Ahab known for her wickedness?',
        correct_answer: 'Jezebel',
        incorrect_answers: ['Bathsheba', 'Ruth', 'Delilah'],
      },
      {
        question: 'What food did God provide for the Israelites in the wilderness?',
        correct_answer: 'Manna',
        incorrect_answers: ['Quail', 'Bread', 'Figs'],
      },
      {
        question: 'What was the name of the giant killed by David?',
        correct_answer: 'Goliath',
        incorrect_answers: ['Og', 'Nebuchadnezzar', 'Dagon'],
      },
      {
        question: 'What is the last book of the Bible?',
        correct_answer: 'Revelation',
        incorrect_answers: ['Genesis', 'Psalms', 'Acts'],
      },
      {
        question: 'Who was thrown into a den of lions but was not harmed?',
        correct_answer: 'Daniel',
        incorrect_answers: ['Joseph', 'Elijah', 'Moses'],
      },
      {
        question: 'What was the name of the mountain where Moses received the Ten Commandments?',
        correct_answer: 'Mount Sinai',
        incorrect_answers: ['Mount Ararat', 'Mount Carmel', 'Mount Nebo'],
      },
      {
        question: 'What did Jesus do at the Last Supper?',
        correct_answer: 'Washed the disciples’ feet',
        incorrect_answers: ['Performed a miracle', 'Prayed in the garden', 'Fed the multitudes'],
      },
      {
        question: 'What was the name of Isaac’s wife?',
        correct_answer: 'Rebekah',
        incorrect_answers: ['Rachel', 'Leah', 'Sarah'],
      },
      {
        question: 'Who built an ark to survive a flood?',
        correct_answer: 'Noah',
        incorrect_answers: ['Moses', 'Abraham', 'Elijah'],
      },
      {
        question: 'How many disciples did Jesus choose?',
        correct_answer: '12',
        incorrect_answers: ['10', '7', '14'],
      },
      {
        question: 'Who was the strongest man in the Bible?',
        correct_answer: 'Samson',
        incorrect_answers: ['David', 'Solomon', 'Gideon'],
      },
      {
        question: 'Who was the first person to see Jesus after His resurrection?',
        correct_answer: 'Mary Magdalene',
        incorrect_answers: ['Peter', 'John', 'Thomas'],
      },
      {
        question: 'What river was Jesus baptized in?',
        correct_answer: 'Jordan',
        incorrect_answers: ['Nile', 'Euphrates', 'Tigris'],
      },
      {
        question: 'How many books are in the Bible?',
        correct_answer: '66',
        incorrect_answers: ['72', '55', '39'],
      },
      {
        question: 'What was the name of the woman who hid the Israelite spies in Jericho?',
        correct_answer: 'Rahab',
        incorrect_answers: ['Ruth', 'Deborah', 'Esther'],
      },
      {
        question: 'What kind of tree was the Tree of Life in the Garden of Eden?',
        correct_answer: 'The Bible does not specify',
        incorrect_answers: ['Fig tree', 'Olive tree', 'Apple tree'],
      },
      {
        question: 'Who is known as the “father of faith”?',
        correct_answer: 'Abraham',
        incorrect_answers: ['Moses', 'Noah', 'David'],
      },
      {
        question: 'Who interpreted Pharaoh’s dreams in Egypt?',
        correct_answer: 'Joseph',
        incorrect_answers: ['Daniel', 'Moses', 'Aaron'],
      },
      {
        question: 'Who was the wife of Boaz and great-grandmother of David?',
        correct_answer: 'Ruth',
        incorrect_answers: ['Naomi', 'Esther', 'Hannah'],
      },
      {
        question: 'How many days did Jesus fast in the wilderness?',
        correct_answer: '40 days',
        incorrect_answers: ['7 days', '21 days', '10 days'],
      },
      {
        question: 'Which apostle is known as the “Doubting Apostle”?',
        correct_answer: 'Thomas',
        incorrect_answers: ['Peter', 'John', 'James'],
      },
      {
        question: 'What gift did King Solomon ask for from God?',
        correct_answer: 'Wisdom',
        incorrect_answers: ['Riches', 'Long life', 'Victory in battle'],
      },
      {
        question: 'What was the first thing Noah built after leaving the ark?',
        correct_answer: 'An altar',
        incorrect_answers: ['A house', 'A well', 'A city'],
      },
      {
        question: 'Which two cities were destroyed by fire and brimstone?',
        correct_answer: 'Sodom and Gomorrah',
        incorrect_answers: ['Nineveh and Jericho', 'Tyre and Sidon', 'Babylon and Assyria'],
      },
      {
        question: 'Who was the first king of Israel?',
        correct_answer: 'Saul',
        incorrect_answers: ['David', 'Solomon', 'Samuel'],
      },
      {
        question: 'What was the name of the sea that Moses parted?',
        correct_answer: 'Red Sea',
        incorrect_answers: ['Dead Sea', 'Mediterranean Sea', 'Sea of Galilee'],
      },
      {
        question: 'Who baptized Jesus?',
        correct_answer: 'John the Baptist',
        incorrect_answers: ['Peter', 'James', 'Paul'],
      },
      {
        question: 'How many days did it rain during the flood of Noah?',
        correct_answer: '40 days and nights',
        incorrect_answers: ['30 days', '7 days', '50 days'],
      },
      {
        question: 'What was the name of Abraham’s first son?',
        correct_answer: 'Ishmael',
        incorrect_answers: ['Isaac', 'Esau', 'Jacob'],
      },
      {
        question: 'What did Jacob dream about at Bethel?',
        correct_answer: 'A ladder reaching to heaven',
        incorrect_answers: ['A burning bush', 'A bright star', 'An angel'],
      },
      {
        question: 'Who was thrown into the fiery furnace but was unharmed?',
        correct_answer: 'Shadrach, Meshach, and Abednego',
        incorrect_answers: ['Daniel', 'Joseph', 'Elijah'],
      },
      {
        question: 'Who was the woman who became queen and saved her people from destruction?',
        correct_answer: 'Esther',
        incorrect_answers: ['Ruth', 'Deborah', 'Hannah'],
      },
      {
        question: 'How many people were saved in Noah’s ark?',
        correct_answer: '8',
        incorrect_answers: ['7', '10', '12'],
      },
      {
        question: 'What is the shortest verse in the Bible?',
        correct_answer: '"Jesus wept"',
        incorrect_answers: ['"God is love"', '"Rejoice always"', '"Pray without ceasing"'],
      },
      {
        question: 'Who was the oldest man in the Bible?',
        correct_answer: 'Methuselah',
        incorrect_answers: ['Noah', 'Abraham', 'Adam'],
      },
      {
        question: 'Who built the Temple in Jerusalem?',
        correct_answer: 'Solomon',
        incorrect_answers: ['David', 'Saul', 'Joshua'],
      },
      {
        question: 'What was the name of the disciple who betrayed Jesus?',
        correct_answer: 'Judas Iscariot',
        incorrect_answers: ['Peter', 'John', 'Andrew'],
      },
      {
        question: 'What did the Israelites eat while wandering in the desert?',
        correct_answer: 'Manna and quail',
        incorrect_answers: ['Bread and fish', 'Milk and honey', 'Locusts and wild honey'],
      },
      {
        question: 'How many times did Peter deny Jesus?',
        correct_answer: 'Three times',
        incorrect_answers: ['Once', 'Twice', 'Four times'],
      },
      {
        question: 'What weapon did David use to defeat Goliath?',
        correct_answer: 'A sling and a stone',
        incorrect_answers: ['A sword', 'A spear', 'A bow and arrow'],
      },
      {
        question: 'Which apostle was a tentmaker by trade?',
        correct_answer: 'Paul',
        incorrect_answers: ['Peter', 'Matthew', 'Thomas'],
      },
      {
        question: 'Who interpreted the writing on the wall in Babylon?',
        correct_answer: 'Daniel',
        incorrect_answers: ['Joseph', 'Moses', 'Elijah'],
      },
      {
        question: 'What did God create on the first day?',
        correct_answer: 'Light',
        incorrect_answers: ['Heaven and earth', 'The sun and moon', 'Plants'],
      },
      {
        question: 'Who was the mother of John the Baptist?',
        correct_answer: 'Elizabeth',
        incorrect_answers: ['Mary', 'Martha', 'Hannah'],
      },
      {
        question: 'How many plagues did God send on Egypt?',
        correct_answer: '10',
        incorrect_answers: ['7', '12', '15'],
      },
      {
        question: 'Who had a coat of many colors?',
        correct_answer: 'Joseph',
        incorrect_answers: ['Jacob', 'David', 'Moses'],
      },
      {
        question: 'What animal spoke to Balaam?',
        correct_answer: 'A donkey',
        incorrect_answers: ['A lion', 'A serpent', 'A sheep'],
      },
      {
        question: 'What is the longest book in the Bible?',
        correct_answer: 'Psalms',
        incorrect_answers: ['Genesis', 'Isaiah', 'Matthew'],
      },
      {
        question: 'Who is known as the “weeping prophet”?',
        correct_answer: 'Jeremiah',
        incorrect_answers: ['Isaiah', 'Ezekiel', 'Hosea'],
      },
      {
        question: 'Who was King David’s best friend?',
        correct_answer: 'Jonathan',
        incorrect_answers: ['Absalom', 'Joab', 'Saul'],
      },
      {
        question: 'What was the name of the tower built by people to reach heaven?',
        correct_answer: 'Tower of Babel',
        incorrect_answers: ['Tower of Jericho', 'Tower of Zion', 'Tower of Bethel'],
      },
      {
        question: 'What did Jesus feed to the 5,000 men, besides women and children?',
        correct_answer: 'Five loaves and two fish',
        incorrect_answers: ['Seven loaves and five fish', 'Three loaves and one fish', 'Two loaves and four fish'],
      },
      {
        question: 'What was Paul’s name before his conversion?',
        correct_answer: 'Saul',
        incorrect_answers: ['Simon', 'John', 'Luke'],
      },
      {
        question: 'What was the name of Moses’ sister?',
        correct_answer: 'Miriam',
        incorrect_answers: ['Hannah', 'Rachel', 'Rebekah'],
      },
  ];
  
  export default bibleQuestions;
  