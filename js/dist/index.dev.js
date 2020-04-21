"use strict";

// @ts-nocheck
$(document).ready(function () {
  var curr = $.scrollify.currentIndex();
  console.log(curr);
  $(".link-to-two").on({
    "click": function click() {
      $.scrollify.move("#Головна");
    }
  });
  $(".link-to-three").on({
    "click": function click() {
      $.scrollify.move("#Проекти");
    }
  });
  $(".link-to-four").on({
    "click": function click() {
      $.scrollify.move("#Кар'єра");
    }
  });
  $(".link-two-m").on({
    "click": function click() {
      $.scrollify.move("#Головна");
    }
  });
  $(".link-three-m").on({
    "click": function click() {
      $.scrollify.move("#Проекти");
    }
  });
  $(".link-four-m").on({
    "click": function click() {
      $.scrollify.move("#Кар'єра");
    }
  });
  $(".link-one").on({
    "click": function click() {
      $.scrollify.move("#onePage");
    }
  });
  $(".link-two").on({
    "click": function click() {
      $.scrollify.move("#twoPage");
    }
  });
  $(".link-three").on({
    "click": function click() {
      $.scrollify.move("#threePage");
    }
  });
  $(".link-four").on({
    "click": function click() {
      $.scrollify.move("#fourPage");
    }
  });
});