const taskLoopCoolTime = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

const elementClick = async (element, cooltime) => {
  element.click()
  console.log("Clicked!")
  await taskLoopCoolTime(cooltime)
}

const _30sec = 30000

const taskLoop = async () => {
  while (true) {
    const elements = document.getElementsByClassName("claimable-bonus__icon")
    elements.length ? await elementClick(elements[0], _30sec) : await taskLoopCoolTime(_30sec)
  }
}

taskLoop()
