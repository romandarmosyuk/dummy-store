export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  image: string;
  role: "admin" | "moderator" | "user";
}

export interface UserDetails extends User {
  age: number;
  gender: string;
  phone: string;
  username: string;
  password: string;
  birthDate: string;
  bloodGroup: string;
  height: number;
  weight: number;
  eyeColor: string;
  hair: Hair;
  ip: string;
  address: Address;
  macAddress: string;
  university: string;
  bank: Bank;
  company: Company;
  ein: string;
  ssn: string;
  userAgent: string;
  crypto: Crypto;
}

export interface Hair {
  color: string;
  type: string;
}

export interface Coordinates {
  lat: number;
  lng: number;
}

export interface Address {
  address: string;
  city: string;
  state: string;
  stateCode: string;
  postalCode: string;
  coordinates: Coordinates;
  country: string;
}

export interface Bank {
  cardExpire: string;
  cardNumber: string;
  cardType: string;
  currency: string;
  iban: string;
}

export interface Company {
  department: string;
  name: string;
  title: string;
  address: Address;
}

export interface Crypto {
  coin: string;
  wallet: string;
  network: string;
}

export interface UserParams {
  id: number;
  firstName: string;
  email: string;
}
