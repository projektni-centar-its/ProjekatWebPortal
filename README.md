<h1>Projekat web portal core</h1>
<p>Projekat web portal pravljen u .NET core 6 okruzenju. Ideja je sve funkcionalnosti starog projekta <a href="https://github.com/its-projektni-centar/ProjekatWebPortal">Link</a> budu prebacene u novi i moderniji framework</p>

<h3>BITNO:</h3>
<p>Projekat je podešen da podržava dokerizaciju, ali za potrebe developmenta pokretati na lokalu (odabrati IIS Express umesto Docker pri pokretanju), kako bi mogla da se koristi lokalna baza.</p>
<p>Kako bi se smanjila nepotrebna kompleksnost, raditi u visual studio 2022, jer on u potpunosti podržava .NET 6. Može biti instaliran bez potrebe da se diraju druge instalirane verzije</p>

<h3>POKRETANJE:</h3>
<p>Prilikom inicijalnog pokretanja u nuget PM konzoli pokrenuri komandu <i><b>update-database</b></i> da bi pokrenuli migracije i kreirali tabele neophodne za rad. <b>Nije potrebno</b> imati instaliran SQL server da bi pokrenuli migracije.</p>

<h3>CONTRIBUTING</h3>
<p><b>NE PUSHOVATI PROMENE DIREKTNO NA MASTER!</b></p>
<p>Napraviti novu granu i imenovati je {prvo_slovo_imena+prezime/opis_izmene}, na primer: <i>iseguljev/dodavanje_korisnika</i></p>
<p>Kada ste zavrsili sa izmenama na grani, napravite pull request na master i pitajte nekoga da vam odobri, uvek postoji mogucnost da se greska provuce, ali je mnogo manja ako pogleda jos jedna osoba!</p>
<p>Na grani idealno treba da ima tek toliko izmena da poktije funkcionalnost. Kao na primer dodavanje kontrolera, dodavanje modela sa migracijama, dodavanje viewa. To pokazuje da je posao dobro raspodeljen, a jako olaksava proces pregledanja PR i smanjuje mogucnost da se greska zavuce. Ponekad nije moguce napraviti izmene manjima, i to je OK, ali ih kada je moguce cepkati na sitnije delove</p>
