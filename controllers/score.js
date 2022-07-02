const handleScore = (req, res) => {
    const data = req.body

    const highestSt = data.highestHS;
    const lowestSt = data.lowestHS;
    const highSchoolSt = data.highSchool;
    const highestUniSt = data.lowestUNI;
    const lowestUniSt = data.highestUNI;
    const firstUNISt = data.firstUNI;

    const grades = {
        highest: highestSt,
        lowest: lowestSt,
        highestUni: highestUniSt,
        lowestUni: lowestUniSt,
        GPA: highSchoolSt,
        firstUNI: firstUNISt,
    }

    
    const { highest, lowest, highestUni, lowestUni, GPA, firstUNI } = grades;
    const GPAscore = (((highest-GPA)/(highest-lowest))*3)+1;
    const UniScore = (((highestUni-firstUNI)/(highestUni-lowestUni))*3)+1;
    const globalScore = (GPAscore+UniScore)/2;
        
    if(highest === '' || lowest === '' || !highest || !lowest) {
        return res.json({
            score: 'you must provide values for both Highest Possible Score and Lowest Succeed Score'
        });
    } else if(!GPA) {
        return res.json({
            score: 'you must provide a value for High School Score'
        });
        
    } else if(!firstUNI && !highestUni && !lowestUni) {
            if(GPAscore>4) {
                return res.json({
                    score: '5'
                });
            }

            if(GPAscore<1) {
                return res.json({
                    score: 'invalid High School Score'
                });
            } 
            
            if(GPAscore) {
                return res.json({
                    score: GPAscore
                });
            }

    } else if(highestUni === '' || lowestUni === '' || !highestUni || !lowestUni) {
        return res.json({
            score: 'you must provide values for both Highest Possible Score and Lowest Succeed Score'
        });

    } else if(firstUNI === '' || !firstUNI) {
        return res.json({
            score: 'you must provide a value for first University Score'
        });

    }
    
    if(GPAscore>4) {
        return res.json({
            score: '5'
        });
    }

    if(GPAscore<1) {
        return res.json({
            score: 'invalid High School Score'
        });
    }

    if(UniScore>4) {
        return res.json({
            score: '5'
        });
    }

    if(UniScore<1) {
        return res.json({
            score: 'invalid University 1st Year Score'
        });
    }

    return res.json({
        score: globalScore
    });
};

module.exports = {
    handleScore: handleScore
}