import IllustrationHero from '../images/illustration-hero.svg'

export const Other = () => {
    return (
        <div>
            Helloooo
        </div>
    )
}

export const Card = () => {
    return (
        <div style={{
            background: 'white',
            borderRadius: '20px',
            width: '400px',
            overflow: 'hidden',
      
          }}>
            <img src={IllustrationHero} alt="" style={{
              width: '100%',
              // borderTopLeftRadius: '20px',
              // borderTopRightRadius: '20px',
            }} />
            <div style={{
              padding: 30
            }}>
              <p style={{
                margin: "0 10px",
                fontSize: 30,
                fontWeight: 600,
                textAlign: 'center',
                color: 'darkblue'
              }}>Order Summary</p>
              <p style={{
                margin: "15px 0 10px",
                fontSize: 16,
                fontWeight: 500,
                textAlign: 'center',
                color: "gray"
              }}>You can now listen to millions can now listen to millions can now listen to millions can now listen to millions</p>
            </div>
            <div style={{
              padding: '0 30px 30px',
              display: 'flex',
              flexDirection: 'column',
              gap: 10,
            }}>
              <button
              style={{
                border: 'none',
                padding: '10px 0',
                fontSize: 16,
                fontWeight: 600,
                background: "darkblue",
                borderRadius: '8px',
                color: 'white'
              }}
              >Proceed to Payment</button>
              <button style={{
                 border: 'none',
                 padding: '10px 0',
                 fontSize: 16,
                 fontWeight: 600,
                 background: "transparent",
                 color: 'gray'
              }}>Cancel order</button>
            </div>
          </div>
    )
}

