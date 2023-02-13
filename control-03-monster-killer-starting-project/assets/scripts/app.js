const ATTACK_VALUE = 10;
const MONSTER_ATTACK_VALUE = 14;
let chosenMaxHealth = 100;
let monsterHealth = chosenMaxHealth;
let playerHealth = chosenMaxHealth;

adjustHealthBars(chosenMaxHealth);

function attackHandler(){
    const damage = dealMonsterDamage(ATTACK_VALUE);
    monsterHealth -= damage;
    const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
    playerHealth -= playerDamage;
    if (monsterHealth <= 0 && playerHealth > 0){
        alert('you won');
    }
    else if (playerHealth <= 0 && monsterHealth > 0){
        alert('you lost');
    }
    else if (monsterHealth<=0 && playerHealth <=0){
        alert('It\'s a draw');
    }
}
attackBtn.addEventListener('click',attackHandler);