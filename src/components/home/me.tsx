import * as React from 'react';

const enum Sex {Women= 'Kadın',  Men= 'Erkek'}

interface BaseWork {
  name?: string;
}

class Work implements BaseWork {
    name?: string;
    readonly specialInfo2: string;
    private specialInfo?: string;
    constructor(name: string, adress: string) {}
}

interface Me {
  name?: string;
  lastname?: string;
  location?: [number, string];
  gender?: Sex;
  setMission?: () =>  void;
}

const m1: Me = {name: 'Cem', lastname: 'Ayan', location: [2, 'Kadıköy'], gender: Sex.Men };
const w1 = new Work('a', 'a');

function buildName(firstName: string, ...restOfName: string[]) {
  // tslint:disable-next-line:prefer-template
  return firstName + ' ' + restOfName.join(' ');
}

function identity<T>(arg: T): T {
  return arg;
}

const myIdentity: <T>(arg: T) => T = identity;

function Me(o1: Me) {

  return(
    <div>
        <a>{m1.gender}</a><br/>
        <a>{identity<string>('myString')}</a><br/>
        <a>{myIdentity<string>('mystring')}</a>
    </div>
  );
}

export default Me;
