export type Boards = {
  player: [string, number[][]]
  computer: [string, number[][]]
}

export type ComputerMove = {
  playerBoard: number[]
  hits: {}
}
