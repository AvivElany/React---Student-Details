export default interface IStudent {
  id: string;
  firstName: string;
  lastName: string;
  gender: string;
  address: {
      street: string;
      houseNumber: number;
      city: string;
  };
  age: number;
  major: string;
  grades: number[];
  parents: {
      relation?: string;
      fullName?: string;
  }[];
  imageUrl: string;
}

export const students:IStudent[] = [
{ 
  id:'b4391c6c-7246-4fc1-8cad-889edfac4361', 
  firstName:'Arik', 
  lastName:'Cohen', 
  gender:'Male', 
  address:{street:'Hahistadrut',houseNumber:122,city:'Haifa'}, 
  age:26, 
  major:'Mathematics', 
  grades:[93,80,71,96], 
  parents:[{relation:'Mother', fullName:'Emily Cohen'}, {relation:'Father', fullName:'Doron Cohen'}], 
  imageUrl:'https://randomuser.me/api/portraits/men/41.jpg' 
},
{
  id: 'c7f3a5d2-7c9a-4d99-abe8-3a0f5d3f4b4e',
  firstName: 'Yael',
  lastName: 'Levi',
  gender: 'Female',
  address: { street: 'Ben Yehuda', houseNumber: 56, city: 'Tel Aviv' },
  age: 29,
  major: 'Computer Science',
  grades: [88, 92, 77, 85],
  parents: [{ relation: 'Father', fullName: 'Amir Levi' }],
  imageUrl: 'https://randomuser.me/api/portraits/women/45.jpg'
},
{
  id: 'd9f6c2fb-6b3d-4e6f-8bf9-6d7b588a2b56',
  firstName: 'Lior',
  lastName: 'Katz',
  gender: 'Male',
  address: { street: 'Weizmann', houseNumber: 23, city: 'Jerusalem' },
  age: 30,
  major: 'Biology',
  grades: [94, 81, 79],
  parents: [{ relation: 'Mother', fullName: 'Dana Katz' }],
  imageUrl: 'https://randomuser.me/api/portraits/men/32.jpg'
},
{
  id: 'a5b4c3d2-1e2f-3g4h-5i6j-7k8l9m0n1o2p',
  firstName: 'Tamar',
  lastName: 'Friedman',
  gender: 'Female',
  address: { street: 'Herzl', houseNumber: 19, city: 'Beersheba' },
  age: 27,
  major: 'History',
  grades: [83, 90, 73, 86],
  parents: [],
  imageUrl: 'https://randomuser.me/api/portraits/women/68.jpg'
},
{
  id: '3e2d1c4b-5f6a-7h8i-9j0k-l1m2n3o4p5q6',
  firstName: 'Noam',
  lastName: 'Goldberg',
  gender: 'Male',
  address: { street: 'Allenby', houseNumber: 47, city: 'Eilat' },
  age: 31,
  major: 'Engineering',
  grades: [70, 95, 89, 93],
  parents: [{ relation: 'Mother', fullName: 'Hagit Goldberg' }, { relation: 'Father', fullName: 'Dan Goldberg' }],
  imageUrl: 'https://randomuser.me/api/portraits/men/43.jpg'
},
{
  id: '5f4e3d2c-1b2a-3c4d-5e6f-7g8h9i0j1k2l',
  firstName: 'Maya',
  lastName: 'Sharon',
  gender: 'Female',
  address: { street: 'Jaffa', houseNumber: 35, city: 'Netanya' },
  age: 24,
  major: 'Literature',
  grades: [84, 97, 78, 81, 90],
  parents: [{ relation: 'Mother', fullName: 'Rina Sharon' }, { relation: 'Father', fullName: 'Gadi Sharon' }],
  imageUrl: 'https://randomuser.me/api/portraits/women/79.jpg'
}  
]