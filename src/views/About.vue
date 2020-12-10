<template>
  <div class="flex flex-col items-center justify-center pb-10">
    <div class="header h-80 w-screen flex items-center justify-center">
      <h1
        class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl"
      >
        Our Story
      </h1>
    </div>
    <div class="carousel">
      <carousel :perPage="1" :autoplay="true" :loop="true" :centerMode="true" :adjustableHeight="false">
        <slide>
          <img class="inline" src="@/assets/images/image1.jpg" alt="" />
        </slide>
        <slide>
          <img class="inline" src="@/assets/images/image2.jpg" alt="" />
        </slide>
        <slide>
          <img class="inline" src="@/assets/images/image3.jpg" alt="" />
        </slide>
        <slide>
          <img class="inline" src="@/assets/images/image4.jpg" alt="" />
        </slide>
        <slide>
          <img class="inline" src="@/assets/images/image5.jpg" alt="" />
        </slide>
        <slide>
          <img class="inline" src="@/assets/images/image6.jpg" alt="" />
        </slide>
      </carousel>
    </div>
    <div class="lg:text-center pt-10">
      <p class="mt-4 max-w-4xl text-xl text-gray-500 lg:mx-auto">
        KC Cyclones is a futsal club (five-a-side soccer) in Kansas City. Now
        registered as a 501 c 3 with the IRS EIN 83-2159432. The team and club
        have a commitment to disadvantaged youth. Club leaders, Coach Henrique
        Pinto and Coach Jeff Wells had hosted several free clinics over the
        years but a breakthrough came in the summer of 2018 when High School
        coach Josh Wikler approached the KC Cyclones to offer a clinic to his
        girls team.
      </p>
      <p class="mt-4 max-w-4xl text-xl text-gray-500 lg:mx-auto">
        KC Cyclones player Oscar Carenza and Jeff Wells led a session at JC
        Harmon school in August. It was a roaring success; and the girls asked
        for another class. But the girls told us that they lived close to
        Wyandotte High School and since they didn’t have transport, they
        requested a clinic on the school court so that they could walk to the
        training.
      </p>
      <p class="mt-4 max-w-4xl text-xl text-gray-500 lg:mx-auto">
        As a result, we held another clinic, this time at Wyandotte High School.
      </p>
      <p class="mt-4 max-w-4xl text-xl text-gray-500 lg:mx-auto">
        There were a dozen boys already playing on the courts. Rather than
        clearing them to one side, Coach Jeff asked if they’d all like to do
        some futsal skills. At the end of the clinic, a ten year old boy, Oscar
        Meija asked for another session. How about tomorrow?
      </p>
      <p class="mt-4 max-w-4xl text-xl text-gray-500 lg:mx-auto">
        After a couple more sessions, the kids told us that they’d love to play
        on a real team. How could we say no?
      </p>
      <p class="mt-4 max-w-4xl text-xl text-gray-500 lg:mx-auto">
        Well, we could have done. These kids are refugees who don’t have shoes,
        transport or money. But we know that a lot of people in the broader
        community do want to help, so we took a leap of faith and entered the
        boys into the KC Futsal League 2018-2019 season. We know it’s not just
        soccer. It’s so much more.
      </p>
      <p class="mt-4 max-w-4xl text-xl text-gray-500 lg:mx-auto">
        Over the winter the team won the KC Futsal Red Division which was an
        amazing experience. Then in the Spring we entered them into an outdoor
        league run by KC Kansas City. The team got second place.
      </p>
      <p class="mt-4 max-w-4xl text-xl text-gray-500 lg:mx-auto">
        We discovered that the team is good and the players have great
        character. But we also had a very difficult time getting them to games
        because none of them have transport. It's a huge issue since public
        transport is so poor in the area. We also discovered that there is so
        much demand- we need more coaches. We can easily form more teams and
        help open the gateways for these young people as they navigate their new
        lives in the United States.
      </p>
    </div>
    <Donate />
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
import Donate from "@/components/Donate";
export default {
  name: "About",
  components: {
    Carousel,
    Slide,
    Donate
  }
};
</script>

<style lang="scss" scoped>
.carousel {
  max-width: 500px;
}
</style>
