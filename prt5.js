function contohIfElse()
{
	let nilai = prompt("Inputkan Nilai Akhir :");
	let grade = "";

//kondisi if else 
if (nilai >= 80) grade = "A"
	else if (nilai >= 78) grade = "B"
		else if (nilai >= 68) grade = "C"
			else if (nilai >= 58) grade = "D"
				else grade = "E"

				//document.write(`Grade yang diperoleh adalah : ${grade}`);

				document.write(`Grade yang diperoleh adalah : `+grade);

			}
		function contohSwitchCase()
		{
			let nilai = prompt("Inputkan Nilai Akhir :");
			let grade = "";
			switch(nilai){
			case nilai >= 80:
			grade = "A";
			break;

			case nilai >= 70:
			grade = "B";
			break;

			case nilai >= 60:
			grade = "C";
			break;

			case nilai >= 50:
			grade = "D";
			break;

			default:
			grade = "E";
		}
		document.write(`Grade yang diperoleh adalah : `+grade);
	}

	function contohForEach()
	{
		let hari = ['senin','Selasa','Rabu','Kamis','Jumat','Sabtu','Minggu']; //nilai array
		hari.forEach(function (day){
			document.write(day + "<br>");
		});
	}