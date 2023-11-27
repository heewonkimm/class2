export default function Typescript() {

    let aaa = "안뇽"
    aaa = 3

    let bbb: string = "하하하"

    aaa = 10

    //타입명시가 필요한 상황
    let ccc: number | string = 1000
    ccc = "1000"

    //숫자타입
    let ddd = 10
    ddd = "철수"

    //불린 타입
    let eee: boolean = true
    eee = false
    eee = "false"

    // 배열 타입
    let fff: number[] = [1,2,3,"하하"]
    let ggg: string [] = ["라", "히", "아", 2]
    let ttt: (number | string)[] = ["라", "히", "아", 2, 10]

    //객체 타입
    interface IProfile {
        name: string
        age: number | string
        school: string
        hobby?: string
    }

    const profile: IProfile = {
        name: "철수",
        age: 8,
        school: "다람쥐초"
    }
    profile.name = "훈이"
    profile.age = "8살"
    profile.hobby = "책"

    //함수타입

    function add(num1: number, num2: number, unit: string): string{
        return num1 + num2 + unit
    }
    const result = add(1000, 2000, "원") // 결과의 리턴 타입도 예측 가능

    const add2 = (num1: number, num2: number, unit: string): string => {
        return num1 + num2 + unit
    }
    const result2 = add2(1000, 2000, "원") //결과의 리턴 타입도 예측 가능

    // any타입
    let qqq: any = "철수"
    qqq = 123
    qqq = true

    return(
        <></>
    )
}