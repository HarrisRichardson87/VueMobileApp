<template>
  <!-- Page Content -->
  <div class="container">

    <div class="row">

      <!-- Post Content Column -->
      <div class="col-lg-8">

        <!-- Title -->
        <h1 class="mt-4">How Intraocular works</h1>

        <!-- Author -->
        <p class="lead">
          by
          <a href="#">Intraocular Team</a>
        </p>

        <hr>

        <!-- Date/Time -->
        <p>Posted on March 1, 2019 at 12:00 PM</p>

        <hr>

        <!-- Preview Image -->
        <img class="img-fluid rounded" width="300" src="../assets/harryCartoon.png" alt="">

        <hr>

        <!-- Post Content -->
        <p class="lead">The Augmented Adjusted Plus-Minus rating was created by Carnegie Mellon PHD candidates Francesca
          Matano, Lee F. Richardson, Taylor Pospisil, Collin Eubanks and Jining Qin in 2018</p>

        <p>In basketball and hockey, state-of-the-art player value statistics are often variants of Adjusted Plus-Minus
          (APM). But APM hasn't had the same impact in soccer, since soccer
          games are low scoring with a low number of substitutions. In soccer, perhaps the most comprehensive player
          value statistics come from video games, and in particular FIFA. FIFA ratings combine the subjective
          evaluations of over 9000 scouts, coaches, and season-ticket holders into ratings for over 18,000 players. This
          paper combines FIFA ratings and APM into a single metric, which we call Augmented APM. The key idea is
          recasting APM into a Bayesian framework, and incorporating FIFA ratings into the prior
          distribution. We show that Augmented APM predicts better than both standard APM and a model using only FIFA
          ratings. We also show that Augmented APM decorrelates players that are highly collinear.</p>
        <!-- <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, doloribus, dolorem iusto blanditiis unde eius illum consequuntur neque dicta incidunt ullam ea hic porro optio ratione repellat perspiciatis. Enim, iure!</p> -->

        <blockquote class="blockquote">
          <!-- <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p> -->
          <!-- <footer class="blockquote-footer">Someone famous in -->
          <!-- <cite title="Source Title">Source Title</cite> -->
          <!-- </footer> -->
        </blockquote>

        <!-- <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, nostrum, aliquid, animi, ut quas placeat totam sunt tempora commodi nihil ullam alias modi dicta saepe minima ab quo voluptatem obcaecati?</p> -->

        <!-- <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, dolor quis. Sunt, ut, explicabo, aliquam tenetur ratione tempore quidem voluptates cupiditate voluptas illo saepe quaerat numquam recusandae? Qui, necessitatibus, est!</p> -->

        <hr>

        <!-- Comments Form -->
      <template v-if="user.loggedIn">
        <Comment/>
     
      </template>
     

      </div>

      <!-- Sidebar Widgets Column -->
      <div class="col-md-4">

        <!-- Search Widget -->
        <!-- <div class="card my-4">
          <h5 class="card-header">Search our Database</h5>
          <div class="card-body">
            <div class="input-group">
              <input type="text" class="form-control" placeholder="Search for...">
              <span class="input-group-btn">
                <button class="btn btn-secondary" type="button">Go!</button>
              </span>
            </div>
          </div>
        </div> -->

        <!-- Categories Widget -->
        <div class="card my-4">
          <h5 class="card-header">Check out</h5>
          <div class="card-body">
            <div class="row">
              <div class="row-lg-2">
                <ul class="col">
                  <li>
                    <a href="#">Free Premier League Ratings</a>
                  </li>


                  <li>
                    <a href="https://arxiv.org/abs/1810.08032">Theory Publication</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>


      </div>
    </div>
  </div>
</template>
<script>
  import {
    mapGetters
  } from "vuex";
  import Comment from '@/components/Comment'
  export default {
    components:{Comment},
    computed: {
      ...mapGetters({
        // map `this.user` to `this.$store.getters.user`
        user: "user"
      })
    }
  }
</script>

<style>
  p {
    font-family: 'Roboto', sans-serif;

  }
</style>