import React from 'react';

import { Text, Title, MainContent } from '../ui';

export const Rules = () => {
  return (
    <MainContent>
      <Title center large>Rule game</Title>

      <Text medium>
        <b>Rock paper scissors</b> (also known as <b>scissors rock paper</b>, <b>paper rock scissors</b> and <b>scissors paper stone</b>) is a hand game usually played between two people, in which each player simultaneously forms one of three shapes with an outstretched hand. These shapes are "rock" (a closed fist), "paper" (a flat hand), and "scissors" (a fist with the index finger and middle finger extended, forming a V). "Scissors" is identical to the two-fingered V sign (also indicating "victory" or "peace") except that it is pointed horizontally instead of being held upright in the air. A simultaneous, zero-sum game, it has only two possible outcomes: a draw, or a win for one player and a loss for the other.
      </Text>

      <Text medium>
        A player who decides to play rock will beat another player who has chosen scissors ("rock crushes scissors" or sometimes "blunts scissors"), but will lose to one who has played paper ("paper covers rock"); a play of paper will lose to a play of scissors ("scissors cuts paper"). If both players choose the same shape, the game is tied and is usually immediately replayed to break the tie. The type of game originated in China and spread with increased contact with East Asia, while developing different variants in signs over time. Other names for the game in the English-speaking world include roshambo and other orderings of the three items, with "rock" sometimes being called "stone".
      </Text>

      <Text medium>
        Rock paper scissors is often used as a fair choosing method between two people, similar to coin flipping, drawing straws, or throwing dice in order to settle a dispute or make an unbiased group decision. Unlike truly random selection methods, however, rock paper scissors can be played with a degree of skill by recognizing and exploiting non-random behavior in opponents.
      </Text>

      <Title as="h2" center big>Game play</Title>

      <Text medium>
        The players usually count aloud to three, or speak the name of the game (e.g. "Rock! Paper! Scissors!" or "Ro Sham Bo!"). Sometimes, people will say "Go!" or "Shoot!" after "Scissors!". Each time either raising one hand in a fist and swinging it down on the count or holding it behind. They then "throw" by extending it towards their opponent. Variations include a version where players use only three counts before throwing their gesture (thus throwing on the count of "Scissors!" or "Bo!"), or a version where they shake their hands three times before "throwing".
      </Text>

      <Title as="h2" center big>History</Title>

      <Text medium><b>Origins</b></Text>

      <Text medium>
        The first known mention of the game was in the book Wuzazu [zh] by the Chinese Ming-dynasty writer Xie Zhaozhi [zh] (fl. c. 1600), who wrote that the game dated back to the time of the Chinese Han dynasty (206 BC – 220 AD). In the book, the game was called shoushiling. Li Rihua's book Note of Liuyanzhai also mentions this game, calling it shoushiling (t. 手勢令; s. 手势令), huozhitou (t. 豁指頭; s. 豁指头), or huaquan (划拳).
      </Text>

      <Text medium>
        Throughout Japanese history there are frequent references to sansukumi-ken, meaning ken (fist) games where "the three who are afraid of one another" (i.e. A beats B, B beats C, and C beats A). This type of game originated in China before being imported to Japan and subsequently also becoming popular among the Japanese.
      </Text>

      <Text medium>
        The earliest Japanese sansukumi-ken game was known as mushi-ken (虫拳), which was imported directly from China. In mushi-ken the "frog" (represented by the thumb) is superseded by the "slug" (represented by the little finger), which, in turn is superseded by the "snake" (represented by the index finger), which is superseded by the "frog". Although this game was imported from China the Japanese version differs in the animals represented. In adopting the game, the original Chinese characters for the poisonous centipede (蜈蜙) were apparently confused with the characters for the slug (蛞蝓). The most popular sansukumi-ken game in Japan was kitsune-ken (狐拳). In the game, a supernatural fox called a kitsune (狐) defeats the village head, the village head (庄屋) defeats the hunter, and the hunter (猟師) defeats the fox. Kitsune-ken, unlike mushi-ken or rock–paper–scissors, is played by making gestures with both hands.
      </Text>

      <Text medium>
        Today, the best-known sansukumi-ken is called jan-ken (じゃんけん), which is a variation of the Chinese games introduced in the 17th century. Jan-ken uses the rock, paper, and scissors signs and is the game that the modern version of rock paper scissors derives from directly. Hand-games using gestures to represent the three conflicting elements of rock, paper, and scissors have been most common since the modern version of the game was created in the late 19th century, between the Edo and Meiji periods.
      </Text>

    </MainContent>
  )
}