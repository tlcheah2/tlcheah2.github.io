class SongCardComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            play: false,
            faIconClass: 'fa-play',
        }
        this.songCardRef = React.createRef();
        // Set song url
        this.audio = new Audio(this.props.songUrl);
        // Set back to original state
        this.audio.onended = () => {
            this.setState({
                play: false,
                faIconClass: 'fa-play',
            })
        }
        // Set progress update 
        this.audio.ontimeupdate = () => {
            this.setState({
                songProgressWidth: (this.audio.currentTime / this.audio.duration * 100) + '%'
            })
        }
    }

    componentDidMount() {
        const btnPlayPause = document.getElementsByClassName('btn-play-pause')[0];
        if (btnPlayPause) {
            btnPlayPause.onmouseover = () => {
                this.setState({
                    faIconColor: 'ic-white',
                })
            }

            btnPlayPause.onmouseleave = () => {
                this.setState({
                    faIconColor: '',
                })
            }
        }
    }

    componentDidUpdate() {
        if (this.state.play) {
            this.audio.play();
        } else {
            this.audio.pause();
        }
    }

    onPlayPauseClicked() {
        // Change icon state
        let newState = {};
        if (!this.state.play) {
            newState = {
                play: true,
                faIconClass: 'fa-pause',
            }
        } else {
            newState = {
                play: false,
                faIconClass: 'fa-play',
            } 
        }
        this.setState(newState);
    }

    render() {
        return (
            <div ref={this.songCardRef} className="song-card" style={{ borderWidth: this.state.songProgressWidth }}>
                <div className="song-progress" style={{ width: this.state.songProgressWidth }}></div>
                <img className="artist-thumbnail"
                    src={this.props.artistThumbnail} 
                    alt="thumbnail of artist image">
                </img>
                <div className="song-info">
                    <p className="artist">{this.props.artist}</p>
                    <p className="song-name">{this.props.songName}</p>
                </div>
                <button onClick={this.onPlayPauseClicked.bind(this)} className="btn-play-pause">
                    <i className={`fas ic-play-pause ${this.state.faIconColor} ${this.state.faIconClass}`}></i>
                </button>
            </div>
        );
    }
}

ReactDOM.render(
    <SongCardComponent 
        artist="ColdPlay" 
        artistThumbnail="https://upload.wikimedia.org/wikipedia/en/f/f9/Everyday_Life_%28Single%29.jpg"
        songName="Daddy" 
        songUrl="https://mp3flare.com/tag/datas//Coldplay%20%E2%80%93%20Daddy.mp3" 
    />,
    document.getElementById('song-card-component'),
);
