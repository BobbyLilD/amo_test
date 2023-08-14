"use client";
import { useEffect } from "react";

const InputPage = () => {
  useEffect(() => {
    const inputEl = document.querySelector("input");
    const buttonEl = document.querySelector("button");
    const timerEl = document.querySelector("span");
    const digReg = /\d+/g;

    // Напишите реализацию createTimerAnimator
    // который будет анимировать timerEl
    const createTimerAnimator = () => {
      return (seconds) => {
        let timer = setInterval(() => {
          timerEl.textContent = new Date(seconds * 1000)
            .toISOString()
            .substring(11, 19);
          seconds--;
          if (seconds < 0) clearInterval(timer);
        }, 1000);
      };
    };

    const animateTimer = createTimerAnimator();

    inputEl.addEventListener("input", (e) => {
      const digitSubstrings = e.target.value.match(digReg);
      if (digitSubstrings)
        inputEl.value = e.target.value.match(digReg).join("");
      else inputEl.value = "";
    });

    buttonEl.addEventListener("click", () => {
      const seconds = Number(inputEl.value);

      animateTimer(seconds);

      inputEl.value = "";
    });
  }, []);

  return (
    <div style={{background:'#fff', height: '100dvh'}}>
      <input placeholder="Seconds" type="text" />

      <button>Start</button>

      <br />
      <br />

      <span>hh:mm:ss</span>

      <script></script>
    </div>
  );
};

export default InputPage;
