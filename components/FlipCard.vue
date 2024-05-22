<template>
<div class="card">
  <div class="card-inner">

    <div class="card-front items-center flex flex-col">
      <!-- <li>{{ props.FrontSideTitle}}</li> -->
      <p>{{ props.FrontSideContent1 }}</p>
      <p>{{ props.FrontSideContent2 }}</p>
      <p>{{ props.FrontSideContent3 }}</p>
      <p>{{ props.FrontSideContent4 }}</p>
      <p>{{ props.FrontSideContent5 }}</p>
      <p>{{ props.FrontSideContent6 }}</p>
      <p>{{ props.FrontSideContent7 }}</p>
      <p>{{ props.FrontSideContent8 }}</p>
      <p>{{ props.FrontSideContent9 }}</p>
      <p>{{ props.FrontSideContent10 }}</p>
    </div>

    <div class="card-back flex items-center flex-col">
      <!-- <h1>{{ props.BackSideTitle }}</h1> -->
      <p>{{ props.BackSideContent1 }}</p>
      <p>{{ props.BackSideContent2 }}</p>
      <p>{{ props.BackSideContent3 }}</p>
      <p>{{ props.BackSideContent4 }}</p>
      <p>{{ props.BackSideContent5 }}</p>
      <p>{{ props.BackSideContent6 }}</p>
      <p>{{ props.BackSideContent7 }}</p>
      <p>{{ props.BackSideContent8 }}</p>
      <p>{{ props.BackSideContent9 }}</p>
      <p>{{ props.BackSideContent10 }}</p>
    </div>

  </div>
</div>
</template>

<script setup>
const props = defineProps({
    FrontSideTitle: String,
    // BackSideTitle: String,
    FrontSideContent1: String,
    FrontSideContent2: String,
    FrontSideContent3: String,
    FrontSideContent4: String,
    FrontSideContent5: String,
    FrontSideContent6: String,
    FrontSideContent7: String,
    FrontSideContent8: String,
    FrontSideContent9: String,
    FrontSideContent10: String,
    BackSideContent1: String,
    BackSideContent2: String,
    BackSideContent3: String,
    BackSideContent4: String,
    BackSideContent5: String,
    BackSideContent6: String,
    BackSideContent7: String,
    BackSideContent8: String,
    BackSideContent9: String,
    BackSideContent10: String,
})
</script>

<style>
.card {
  width: auto;
  height: auto;
  min-width: 360px;
  min-height: 250px;
  perspective: 1000px;
}

.card-inner {
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.999s;
}

.card:hover .card-inner {
  transform: rotateY(180deg);
}

.card-front,
.card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
}

.card-front {
  background-color: #6A2C70;
  color: #fff;
  display: flex;
  align-items: center;
  border: 10px solid #6A2C70;
  border-radius: 10px;
  justify-content: center;
  transform: rotateY(0deg);
}

.card-back {
  background-color: #F08A5D;
  color: #fff;
  display: flex;
  align-items: center;
  border: 10px solid #F08A5D;
  border-radius: 10px;
  justify-content: center;
  transform: rotateY(180deg);
}

</style>