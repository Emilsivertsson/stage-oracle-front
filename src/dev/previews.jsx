import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox'
import {PaletteTree} from './palette'
import PageNotFound from "../PageNotFound.jsx";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/PageNotFound">
                <PageNotFound/>
            </ComponentPreview>
        </Previews>
    )
}

export default ComponentPreviews