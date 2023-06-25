const random = (a, b) => a + Math.random() * b;
const randomInt = (a, b) => Math.floor(random(a, b));
const randomColor = () =>
  `rgb(${randomInt(80, 50)}, ${randomInt(80, 50)}, ${randomInt(80, 50)})`;

var planetData = [];
const totalPlanets = 6;
for (let index = 0; index < totalPlanets; index++) {
  planetData.push({
    id: index,
    color: randomColor(),
    xRadius: (index + 1.5) * 4,
    zRadius: (index + 1.5) * 2,
    size: random(0.5, 1),
    speed: random(0.1, 0.6),
    offset: random(0, Math.PI * 2),
  });
}
const outerplanetdistscaling=10000000*1.6/100000000;
const innerplanetdistscaling=10000000*1.6/70000000;

planetData=[
  {
    id:1,
    color:"grey",
    xRadius: 3.7*innerplanetdistscaling ,
    zRadius: 3.7*innerplanetdistscaling ,
    size:2440,
    speed: 4.79,
    offset: random(0, Math.PI * 2),
  },
  {
    id:2,
    color:"brown",
    xRadius: 6.7*innerplanetdistscaling,
    zRadius: 6.7*innerplanetdistscaling ,
    size:6050,
    speed: 3.50,
    offset: random(0, Math.PI * 2),
  },
  {
    id:3,
    color:"blue",
    xRadius: 9.3*innerplanetdistscaling,
    zRadius: 9.3*innerplanetdistscaling,
    size:6371,
    speed: 2.98,
    offset: random(0, Math.PI * 2),
  },
  {
    id:4,
    color:"brown",
    xRadius: 14.2*innerplanetdistscaling,
    zRadius: 14.2*innerplanetdistscaling,
    size:3390,
    speed: 2.41,
    offset: random(0, Math.PI * 2),
  },
  {
    id:5,
    color:"red",
    xRadius: 48.4*outerplanetdistscaling,
    zRadius: 48.4*outerplanetdistscaling,
    size:70000,
    speed: 1.37,
    offset: random(0, Math.PI * 2),
  },
  {
    id:6,
    color:"brown",
    xRadius: 88.9*outerplanetdistscaling,
    zRadius: 88.9*outerplanetdistscaling,
    size:58200,
    speed: 0.97,
    offset: random(0, Math.PI * 2),
  },
  {
    id:7,
    color:"blue",
    xRadius: 179*outerplanetdistscaling,
    zRadius: 179*outerplanetdistscaling,
    size:25300,
    speed: 0.68,
    offset: random(0, Math.PI * 2),
  },
  {
    id:8,
    color:"blue",
    xRadius: 288*outerplanetdistscaling,
    zRadius: 288*outerplanetdistscaling,
    size:24600,
    speed: 0.54,
    offset: random(0, Math.PI * 2),
  }
]

export default planetData;
