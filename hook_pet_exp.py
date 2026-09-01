import re

path = '少年学习空间站.html'
with open(path, 'r', encoding='utf-8') as f:
    h = f.read()

# 辅助：在匹配后插入，避免重复
hook = '\n    recordStudyAction(1); addPetExp(2);'
hook_math = '\n    recordStudyAction(1); addPetExp(1);'

def insert_once(pattern, replacement, label):
    global h
    if replacement in h:
        print(f'[skip] {label}: already hooked')
        return
    n = h.count(pattern)
    if n == 0:
        print(f'[warn] {label}: pattern not found')
        return
    if n > 1:
        print(f'[warn] {label}: pattern appears {n} times, replacing first only')
    h = h.replace(pattern, replacement, 1)
    print(f'[ok] {label}: hooked')

# 1. 英语拼写 checkSpell
insert_once(
    "addStars(2);\n    result.innerHTML = '<div class=\"result-display result-correct\">太棒了！+2 ⭐</div>';",
    "addStars(2);" + hook + "\n    result.innerHTML = '<div class=\"result-display result-correct\">太棒了！+2 ⭐</div>';",
    'checkSpell'
)

# 2. 英语配对 matchClick
insert_once(
    "state.progress.english.correct++;\n      addStars(2);\n      matchSelected.classList.add('correct');",
    "state.progress.english.correct++;" + hook + "\n      addStars(2);\n      matchSelected.classList.add('correct');",
    'matchClick'
)

# 3. 古诗 checkPoetryAnswer
insert_once(
    "state.progress.poetry.correct++;\n    addStars(2);\n    btn.classList.add('correct');",
    "state.progress.poetry.correct++;" + hook + "\n    addStars(2);\n    btn.classList.add('correct');",
    'checkPoetryAnswer'
)

# 4. 阅读理解 checkReadingAnswer
insert_once(
    "state.progress.reading.correct++;\n    addStars(2);\n    btn.classList.add('correct');",
    "state.progress.reading.correct++;" + hook + "\n    addStars(2);\n    btn.classList.add('correct');",
    'checkReadingAnswer'
)

# 5. 成语故事 checkIdiomStory
insert_once(
    "state.progress.idiom.correct++;\n    addStars(2);\n    btn.classList.add('correct');",
    "state.progress.idiom.correct++;" + hook + "\n    addStars(2);\n    btn.classList.add('correct');",
    'checkIdiomStory'
)

# 6. 成语填空 checkIdiomFill
insert_once(
    "state.progress.idiom.correct++;\n    addStars(2);\n    btn.classList.add('correct');",
    "state.progress.idiom.correct++;" + hook + "\n    addStars(2);\n    btn.classList.add('correct');",
    'checkIdiomFill'
)

# 7. 数学王国-除法练习 checkMathAnswer (addStars(1))
insert_once(
    "state.progress.math.correct++;\n    addStars(1);\n    btn.classList.add('correct');",
    "state.progress.math.correct++;" + hook_math + "\n    addStars(1);\n    btn.classList.add('correct');",
    'checkMathAnswer'
)

# 8. 数学复习专项 checkReviewAnswer
insert_once(
    "sess.correct++;\n    state.progress.math.correct++;\n    addStars(1);",
    "sess.correct++;\n    state.progress.math.correct++;" + hook_math + "\n    addStars(1);",
    'checkReviewAnswer'
)

# 9. 思维训练 checkThinkingAnswer
insert_once(
    "state.progress.thinking.correct++;\n    addStars(2);\n    btn.classList.add('correct');",
    "state.progress.thinking.correct++;" + hook + "\n    addStars(2);\n    btn.classList.add('correct');",
    'checkThinkingAnswer'
)

# 10. 闯关冒险 checkAdvAnswer 普通答对
insert_once(
    "addStars(1);\n    btn.classList.add('correct');\n    result.innerHTML = '<div class=\"result-display result-correct\">太棒了！答对了！</div>';",
    "addStars(1);" + hook + "\n    btn.classList.add('correct');\n    result.innerHTML = '<div class=\"result-display result-correct\">太棒了！答对了！</div>';",
    'checkAdvAnswer-normal'
)

# 11. 错题重练 checkRedoChoice
insert_once(
    "state.progress.thinking.correct++;\n      addStars(2);\n      btn.classList.add('correct');",
    "state.progress.thinking.correct++;" + hook + "\n      addStars(2);\n      btn.classList.add('correct');",
    'checkRedoChoice'
)

# 12. 每日任务 toggleDailyTask
insert_once(
    "addStars(2);\n    state.coins = (state.coins||0) + 5;",
    "addStars(2);" + hook + "\n    state.coins = (state.coins||0) + 5;",
    'toggleDailyTask'
)

with open(path, 'w', encoding='utf-8') as f:
    f.write(h)

print('\nDone.')
