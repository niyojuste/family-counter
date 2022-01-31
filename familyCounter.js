const familyCounter = (arr) => {
    return new Promise(function (resolve, reject) {
        let totalChildren = 0
        setTimeout(() => {
			arr.forEach(family => {
				if (family.childrenNumber < 0) {
					return console.log(
					 `Skipped count: Encountered negative children for ${family.fatherName}'s family`
					)
				}
				totalChildren += family.childrenNumber
			})
            
			for (let i = 0; i < arr.length; i++) {
				if (arr[i].fatherName.toLowerCase() === 'yves') {
					reject('Yves is no longer a dad in 2022')
				}
				arr[i] = {
					...arr[i],
					averageChildrenPerFamily: Math.ceil(totalChildren / arr.length),
				}
			}
			resolve(arr)
		}, 1000)
	})
}

let families = [
	{
		fatherName: 'Patrick',
		motherName: 'Diane',
		childrenNumber: 3,
	},
	{
		fatherName: 'Emmanuel',
		motherName: 'Alice',
		childrenNumber: 2,
	},
	{
		fatherName: 'Chris',
		motherName: 'Sandra',
		childrenNumber: 0,
	},
	{
		fatherName: 'Jules',
		motherName: 'Chance',
		childrenNumber: 4,
	},
	{
		fatherName: 'Eric',
		motherName: 'Belise',
		childrenNumber: 2,
	},
	{
		fatherName: 'Michel',
		motherName: 'Marie',
		childrenNumber: 1,
	},
]

familyCounter(families)
	.then(() => {
		console.log(families)
	})
	.catch((error) => {
		console.log(error)
	})
