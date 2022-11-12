---
navigation: false
---

<template>
  <div class="container">
    <div class="is-flex is-flex-direction-column">
      <h1>Puzzle Three</h1>

      <h3>
        <h3>
          Alright, alright. You're pretty good at this. Since you made it this
          far, I can trust you to help me with something.
        </h3>
        I have a long list of IP addresses of computers that have accessed my
        website. However, I don't know if the computer is a human or an alien
        computer! Human computers use IPv4 and IPv6 addresses. Alien computers
        try to mimic IPv4 and IPv6 addresses, but there's something wrong with
        them.
      </h3>

      <hr />
      <h3>
        A human IPv4 address has the form “x1.x2.x3.x4” where:
        <ul>
          <li>- 0 ≤ x<sub>i</sub> ≤ 255</li>
          <li>- x<sub>i</sub> does not have any leading zeros.</li>
        </ul>
      </h3>
      <h3>
        For example, “82.81.202.251” and “84.14.199.180” are human IPv4
        addresses, while “146.207.6” and “4.884.124.41” are alien IPv4
        addresses.
      </h3>
      <hr />
      <h3>
        A human IPv6 address has the form "x1:x2:x3:x4:x5:x6:x7:x8” where:
        <ul>
          <li>- 0 ≤ x<sub>i</sub>.length ≤ 4</li>
          <li>
            - x<sub>i</sub>
            may have leading zeros
          </li>
          <li>
            - x<sub>i</sub>
            is a hexadecimal string that may contain digits, lowercase English
            letters ('a' to 'f'), and uppercase English letters ('A' to 'F').
          </li>
        </ul>
        For example, “F8Ac:Bc9:2b:3EDa:a:cC:F6:78” and
        “5CE:81A:7A0:AbD:dF8:C:f96:9E2” are human IPv6 addresses, while
        “6:02:84:ea3:AAB0:B:#106:4f” and “c:8E3F:eB:C:1C:456:c:535B:845” are
        alien IPv6 addresses.
      </h3>
      <hr />
      <h3>
        Convert each human IP to 1 and each alien IP to 0. I started doing the
        first 8 lines manually, but there are too many IPs! Here's what I got
        for the first 8 lines:
      </h3>
      <h3>
        <ul>
          <li>136.0238.219.197 = 0</li>
          <li>18c:E:b:F2F6:3A:De4B:ccC4:1C8 = 1</li>
          <li>176.205.149.141 = 1</li>
          <li>70Eb:acf2:2:d:dd:DBf:96d:1EC6 = 1</li>
          <li>12.226.61.233.79 = 0</li>
          <li>143.228.15.134 = 1</li>
          <li>162.197.254.246 = 1</li>
          <li>757:8A87:a2cC:3:c:0E8e:b5a:aa8D:c = 0</li>
        </ul>
      </h3>
      <h3><b>What could these 0s and 1s mean?</b></h3>
      <a
        href="https://drive.google.com/uc?export=download&id=1O0Yy-R8sk8sGFN6-YRENpEHjB5TRJpZy"
        download
      >
        <h3>Click to Download Puzzle</h3>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PuzzleThree',
  data() {
    return {
      showPage: false,
    }
  },
}
</script>

<style type="text/css">
.container {
  display: grid;
  height: 150vh;
  place-items: center;
  color: black;
}

.is-flex {
  width: 60%;
}
</style>
