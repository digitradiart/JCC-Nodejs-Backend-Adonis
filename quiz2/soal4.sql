/*
4.
Terdapat dua tabel: users dan posts di database dengan data seperti berikut.

id	name	email
1	John Doe	john@doe.com
2	Jane Doe	jane@doe.com


id	title	body	user_id
1	postingan pertama John	ini postingan pertama John	1
2	postingan kedua John	ini postingan kedua John	1
Tulislah Query untuk mendapatkan data user dengan jumlah postingan yang dia miliki seperti berikut

name	post_count
John Doe	2
Bobot soal: 20 */

SELECT users.name, count(posts.title) AS post_count FROM users JOIN posts ON users.id = posts.user_id;