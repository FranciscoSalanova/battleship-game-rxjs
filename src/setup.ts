const isThereEnoughSpaceForNextMove = (
  board: number[][],
  ship: number,
  x: number,
  y: number
) => {
  const row = [...board[x]]
  row[y] = ship
  const col = board.map((r) => r.filter((c, j) => j === y)[0])
  col[x] = ship

  const shipStartInCol = col.indexOf(ship)
  const shipEndInCol = col.lastIndexOf(ship)
  const shipStartInRow = row.indexOf(ship)
  const shipEndInRow = row.lastIndexOf(ship)
}
