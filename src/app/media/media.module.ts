import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";

import {MediaComponent} from "./media.component";
import {MediaDetailComponent} from "./media-detail/media-detail.component";
import {MediaListComponent} from "./media-list/media-list.component";
import {MediaItemComponent} from "./media-list/media-item.component";
import {MediaEditComponent} from "./media-edit/media-edit.component";
import {MediaStartComponent} from "./media-start.component";
import {mediaRouting} from "./media.routing";

@NgModule({
    declarations: [
        MediaComponent,
        MediaDetailComponent,
        MediaListComponent,
        MediaItemComponent,
        MediaEditComponent,
        MediaStartComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        mediaRouting
    ]
})

export class MediaModule {}
