_enemyhealth = document.getElementById("enemyhealth");
_health = document.getElementById("health");
_dialog = document.getElementById("dialogpanel");
_attack = document.getElementById("attack");
_guard = document.getElementById("guard");
_continue = document.getElementById("continue");
_attack.onclick = function() {Attack()}
_guard.onclick = function() {Guard()}
_continue.onclick = function() {Continue()}
var health = 100;
var enemyhealth = 100;
var dialog = "sajt sajt sajt sajt sajt sajt";
var damage = 20;
var enemydamage = 20;
var randomnumber = 0;

var animate_it = false;
function Update()
{
    if (animate_it) 
    {
        _dialog.classList.remove("finished");
        animate_it = false;
    }
    else
    {
        _dialog.classList.add("finished");
        animate_it = true;
    }
    _dialog.innerHTML = dialog;
    

    _health.innerHTML= "health: " + health;
    _enemyhealth.innerHTML= "enemy health: " + enemyhealth;
    
}

function Attack()
{
    //Random number between 1-10
    randomnumber = Math.floor(Math.random() * 11);
    console.log(randomnumber);
    if (randomnumber >= 5)
    {
        enemyhealth -= damage;
        dialog = "Enemy took " + damage + " damage, az anyagi kár jelentős.";
        Update();
    }
    else
    {
        dialog = "The támadás is sikertelen, az enemy védekezett.";
        Update();
    }
    _attack.style.display = "none";
    _guard.style.display = "none";
    _continue.style.display = "inline";
}

var guarded = false;
function Guard()
{
    //Random number between 1-10
    randomnumber = Math.floor(Math.random() * 11);
    console.log(randomnumber);
    if (randomnumber >= 5)
    {
        
        dialog = "Enemy attacked, but you guarded.";
        Update();
    }
    else
    {
        dialog = "Enemy didn't attack, but you guarded...";
        Update();
    }
    guarded = true;

    _attack.style.display = "none";
    _guard.style.display = "none";
    _continue.style.display = "inline";
}


var continue_counter = 0;
function Continue()
{

    if (continue_counter == 0)
    {
        continue_counter += 1;
    }
    else if (continue_counter == 1)
    {
        if (guarded)
        {
            guarded = false;
            continue_counter = 0;
            
            _attack.style.display = "inline";
            _guard.style.display = "inline";
            _continue.style.display = "none";

            return;
        }
        EnemyAttack();
        continue_counter += 1;
    }
    else if (continue_counter == 2)
    {
        _attack.style.display = "inline";
        _guard.style.display = "inline";
        _continue.style.display = "none";
        continue_counter = 0;
    }

    Update();

    _
}

function EnemyAttack()
{
    randomnumber = Math.floor(Math.random() * 11); // 1-10 szám
    if (randomnumber >= 3)
    {
        dialog = "megbaszódtál, az ellenséged " + enemydamage + " sebzésnyi kárt okozott benned.";
        health -= 20;
    }
    else
    {
        dialog = "balfasz volt ellenfeled, megbotlott a saját lábában támadáskor... te jössz!";
    }
}