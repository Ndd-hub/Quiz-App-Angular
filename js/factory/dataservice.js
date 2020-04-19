(function() {
  angular.module("celebrityFacts").factory("DataService", DataFactory);

  function DataFactory() {
    var dataObj = {
      celebsData: celebsData,
      quizQuestions: quizQuestions,
      correctAnswers: correctAnswers
    };
    return dataObj;
  }

var correctAnswers = [2,0,1,3,1,2]; // we will typically get this from an API but from this project I'm taking it from this array

var quizQuestions = [
    {
      type: "text",
      text: "When was Matt Damon born?",
      possibilities: [
        {
          answer: "17 February, 1991"
        },
        {
          answer: "15 April, 1990"
        },
        {
          answer: "8 October, 1970"
        },
        {
          answer: "5 March, 1970"
        }
      ],
      selected: null,
      correct: null
    },

    {
      type: "text",
      text: "Who attended the Academy of Contemporary Music?",
      possibilities: [
        {
          answer: "Ed Sheeran"
        },
        {
          answer: "Chris Martin"
        },
        {
          answer: "Taylor Swift"
        },
        {
          answer: "Emma Watson"
        }
      ],
      selected: null,
      correct: null
    },

    {
        type: "text",
        text: "Who was the youngest artist ever signed by the Sony/ATV Music publishing house?",
        possibilities: [
          {
            answer: "Sia"
          },
          {
            answer: "Taylor Swift"
          },
          {
            answer: "Britney Spears"
          },
          {
            answer: "Katy Perry"
          }
        ],
        selected: null,
        correct: null
    },

    {
        type: "text",
        text: "Who was the lead actor in the movies: Top Gun, Mission Immpossible, Rain Main and Cocktail?",
        possibilities: [
          {
            answer: "Brad Pitt"
          },
          {
            answer: "Matt Damon"
          },
          {
            answer: "Johnny Depp"
          },
          {
            answer: "Tom Cruise"
          }
        ],
        selected: null,
        correct: null
    },

    {
        type: "image",
        text: "Which actress potrayed the role of Rachel Green in the hit sitcom Friends?",
        possibilities: [
            {
                answer: "https://pbs.twimg.com/profile_images/1777161978/Cougar_town_cox_300_400x400.jpg",
                name: "Courteney Cox"
            },
            {
                answer: "https://s-media-cache-ak0.pinimg.com/736x/c1/e5/c1/c1e5c1ee11ebcaf5ce093b1c08304614.jpg",
                name: "Jennifer Aniston"
            },
            {
                answer: "https://typeset-beta.imgix.net/rehost%2F2016%2F9%2F13%2F8050f7a3-6653-4162-9a64-189ecabf5215.jpg",
                name: "Phoebe Buffay"

            },
            {
                answer: "https://s-media-cache-ak0.pinimg.com/564x/da/af/d3/daafd3a114bc490833dc89c2a49eb3d6.jpg",
                name: "Maggie Wheeler"

            }
        ],
        selected: null,
        correct: null
    },

    {
        type: "text",
        text: "Which celebrity went to the Dragon School and trained as an actress at the Oxford branch of Stagecoach Theatre Arts?",
        possibilities: [
          {
            answer: "Angeline Jolie"
          },
          {
            answer: "Jennifer Lawrence"
          },
          {
            answer: "Emma Watson"
          },
          {
            answer: "Natalie Portman"
          }
        ],
        selected: null,
        correct: null
    },
  ];



  var celebsData = [
           {
               type: "Matt Damon",
               image_url: "img/matt.jpeg",
               born: "8 October, 1970",
               locations: "Boston, Massachusetts",
               spouse: "Luciana Bozán Barroso",
               description: "Matthew Paige Damon was born on October 8, 1970, in Boston, Massachusetts, to Kent Damon, a stockbroker, realtor and tax preparer, and Nancy Carlsson-Paige, an early childhood education professor at Lesley University. Matt has an older brother named Kyle who is now a sculptor. One of his first movie roles was a one-line part in Mystic Pizza (1988) starring Julia Roberts."
           },

           {
               type: "Ed Sheeran",
               image_url: "img/ed.jpeg",
               born: "17 February, 1991",
               locations: "Framlingham, Suffolk, England",
               spouse: "Single",
               description: "Ed Sheeran is an English singer-songwriter. He was born in Hebden Bridge, West Yorkshire, and raised in Framlingham, Suffolk. He attended the Academy of Contemporary Music in Guildford, Surrey, as an undergraduate from the age of 18 in autumn 2009. Sheeran's popularity abroad began in 2012. In the US, he made a guest appearance on Taylor Swift's fourth studio album, Red."
          },

          {
              type: "Emma Watson",
              image_url: "img/emma.jpg",
              born: "15 April, 1990",
              locations: "Paris, France",
              spouse: "Single",
              description: "Emma Charlotte Duerre Watson (born 15 April 1990) is a British actress, model, and activist. Born in Paris and brought up in Oxfordshire, Watson attended the Dragon School and trained as an actress at the Oxford branch of Stagecoach Theatre Arts. She rose to prominence after landing her first professional acting role as Hermione Granger in the Harry Potter film series, having acted only in school plays previously. Watson appeared in all eight Harry Potter films from 2001 to 2011, earning worldwide fame, critical accolades, and more than £10 million."

          },

          {
              type: "Jennifer Aniston",
              image_url: "img/jennifer.jpg",
              born: "February 11, 1969",
              locations: "California, U.S.",
              spouse: "Justin Theroux ",
              description: "Jennifer Joanna Aniston (born February 11, 1969) is an American actress, producer, and businesswoman. She is the daughter of Greek-born actor John Aniston and American actress Nancy Dow. Aniston gained worldwide recognition for portraying Rachel Green on the popular television sitcom Friends (1994–2004), a role which earned her a Primetime Emmy Award, a Golden Globe Award, and a Screen Actors Guild Award. The character was widely popular during the airing of the series and was later recognized as one of the 100 greatest female characters in United States television."

          },

          {
              type: "Taylor Alison Swift",
              image_url: "img/taylor.jpg",
              born: "December 13, 1989",
              locations: "Pennsylvania, U.S.",
              spouse: "Single",
              description: "Taylor Alison Swift (born December 13, 1989) is an American singer-songwriter. One of the most popular contemporary female recording artists, she is known for narrative songs about her personal life, which has received much media attention.\r\n\r\nBorn and raised in Pennsylvania, Swift moved to Nashville, Tennessee at age 14 to pursue a career in country music. She signed with the independent label Big Machine Records and became the youngest artist ever signed by the Sony\/ATV Music publishing house. Her eponymous debut album in 2006 peaked at number five on Billboard 200 and spent the most weeks on the chart in the 2000s."

          },

          {
              type: "Thomas Cruise Mapother IV",
              image_url: "img/tom.jpg",
              born: "July 3, 1962",
              locations: "New York, U.S.",
              spouse: "Single",
              description: "Thomas Cruise Mapother IV (born July 3, 1962), known professionally as Tom Cruise, is an American actor and producer. He has been nominated for three Academy Awards and has won three Golden Globe Awards. He started his career at age 19 in the film Endless Love (1981). After portraying supporting roles in Taps (1981) and The Outsiders (1983), his first leading role was in the romantic comedy Risky Business, released in August 1983. Cruise became a full-fledged movie star after starring as Pete \"Maverick\" Mitchell in the action drama Top Gun (1986). One of the biggest movie stars in Hollywood, Cruise starred in several more successful films in the 1980s, including the dramas The Color of Money (1986), Cocktail (1988), Rain Man (1988), and Born on the Fourth of July (1989)."

          }

                  ];
})();
